// src/supabaseClient.js
import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = 'https://aykztfyyqgqfobrjqjja.supabase.co';  // Replace with your Supabase URL
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImF5a3p0Znl5cWdxZm9icmpxamphIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzI4NzczOTQsImV4cCI6MjA0ODQ1MzM5NH0.jZBtSRMbFEvcCnW4bYJ6jcCQfei4QrmjgPWzavVCjRM';  // Replace with your Supabase anon key

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

