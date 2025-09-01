-- Remove the conflicting overly permissive policy that allows unrestricted access
DROP POLICY IF EXISTS "acesso geral" ON public.leads;

-- The existing policies are sufficient:
-- 1. "Anyone can insert leads" - allows public form submissions
-- 2. "No one can read leads" - protects customer data from unauthorized access