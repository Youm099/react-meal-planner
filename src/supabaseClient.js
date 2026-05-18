
''
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://nkqqlcyncrtqrdshysbt.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5rcXFsY3luY3J0cXJkc2h5c2J0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzkxMjQ2NTEsImV4cCI6MjA5NDcwMDY1MX0.SxfRVji7S0bKbm3QdXtge4F9UIS0jmOuhIbEUYmxg2A';

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;