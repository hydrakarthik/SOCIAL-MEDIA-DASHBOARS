// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://pxxbegtijqdmwyaydgme.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InB4eGJlZ3RpanFkbXd5YXlkZ21lIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDkzNTg3MjYsImV4cCI6MjA2NDkzNDcyNn0.2OxD8FBuupH3K8FCVjBeURe6Mipr43niHs3SOhsCptI";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);