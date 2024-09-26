import AsyncStorage from '@react-native-async-storage/async-storage'
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://xrakjulmvmzrrdliqcps.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhyYWtqdWxtdm16cnJkbGlxY3BzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjczNzc1NjAsImV4cCI6MjA0Mjk1MzU2MH0.Cd20n1Gg4tjNhS29FY9FFrFVFq6rten2tHRCNQcNGkU'

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
    auth: {
        storage: AsyncStorage,
        autoRefreshToken: true,
        persistSession: true,
        detectSessionInUrl: false,
    },
})