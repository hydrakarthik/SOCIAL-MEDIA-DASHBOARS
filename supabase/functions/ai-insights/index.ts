
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    const supabaseClient = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_ANON_KEY') ?? '',
      { global: { headers: { Authorization: req.headers.get('Authorization')! } } }
    )

    // Get user from JWT
    const { data: { user } } = await supabaseClient.auth.getUser()
    
    if (!user) {
      return new Response('Unauthorized', { status: 401, headers: corsHeaders })
    }

    // Generate dummy AI insights for now
    const insights = [
      {
        type: 'performance',
        title: 'Peak Engagement Hours',
        description: 'Your posts perform best between 2-4 PM on weekdays.',
        action: 'Schedule more content during these hours',
        confidence: 87
      },
      {
        type: 'content',
        title: 'Video Content Boost',
        description: 'Video posts get 3x more engagement than image posts.',
        action: 'Create more video content',
        confidence: 92
      },
      {
        type: 'audience',
        title: 'Growing Audience',
        description: 'You gained 15% more followers this month compared to last month.',
        action: 'Keep up the current content strategy',
        confidence: 95
      }
    ];

    return new Response(
      JSON.stringify(insights),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } },
    )
  } catch (error) {
    return new Response(
      JSON.stringify({ error: error.message }),
      { 
        status: 500, 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
      },
    )
  }
})
