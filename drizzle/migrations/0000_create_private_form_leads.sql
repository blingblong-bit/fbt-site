CREATE TABLE public.leads (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at timestamptz NOT NULL DEFAULT now(),
  form_type text NOT NULL CHECK (form_type IN ('contact', 'athlete')),
  name text NOT NULL CHECK (char_length(name) BETWEEN 1 AND 100),
  guardian_name text CHECK (guardian_name IS NULL OR char_length(guardian_name) BETWEEN 1 AND 100),
  athlete_name text CHECK (athlete_name IS NULL OR char_length(athlete_name) BETWEEN 1 AND 100),
  phone text NOT NULL CHECK (char_length(phone) BETWEEN 7 AND 30),
  email text CHECK (email IS NULL OR char_length(email) BETWEEN 1 AND 255),
  service_interest text CHECK (service_interest IS NULL OR service_interest IN ('personal-training', 'post-rehab', 'fit-beyond-performance', 'not-sure')),
  training_for text CHECK (training_for IS NULL OR char_length(training_for) BETWEEN 1 AND 200),
  primary_goal text CHECK (primary_goal IS NULL OR char_length(primary_goal) BETWEEN 1 AND 500),
  preferred_contact text CHECK (preferred_contact IS NULL OR preferred_contact IN ('phone', 'text', 'email')),
  message text CHECK (message IS NULL OR char_length(message) <= 1000),
  email_status text NOT NULL DEFAULT 'pending' CHECK (email_status IN ('pending', 'sent', 'failed', 'suppressed'))
);
GRANT ALL ON public.leads TO service_role;
ALTER TABLE public.leads ENABLE ROW LEVEL SECURITY;
COMMENT ON TABLE public.leads IS 'Private contact and athlete inquiries. Only validated server submissions and the Lovable Cloud database viewer can access these rows; no visitor access policies.';
CREATE INDEX leads_created_at_idx ON public.leads (created_at DESC);