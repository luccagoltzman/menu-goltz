const supabaseUrl = 'https://zgcynjkhiygduaooedkx.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpnY3luamtoaXlnZHVhb29lZGt4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTIxNzM5MjksImV4cCI6MjA2Nzc0OTkyOX0.34UZhvD4tepH9We1E8W2TPpIh6nbvQY9EIZ1DedUEsQ'

// Inicializa o cliente Supabase usando o objeto global
export const supabase = supabaseClient.createClient(supabaseUrl, supabaseKey) 