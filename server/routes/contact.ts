import { RequestHandler } from "express";
import { z } from "zod";

// Contact form validation schema
const ContactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().optional(),
  subject: z.enum(["membership", "personal_training", "group_classes", "general"]),
  message: z.string().min(10, "Message must be at least 10 characters"),
  preferredContactMethod: z.enum(["email", "phone"]).optional(),
  goals: z.array(z.string()).optional()
});

export type ContactFormData = z.infer<typeof ContactFormSchema>;

export interface ContactResponse {
  success: boolean;
  message: string;
  id?: string;
}

export const handleContactSubmission: RequestHandler = async (req, res) => {
  try {
    // Validate the incoming data
    const validatedData = ContactFormSchema.parse(req.body);

    // Here you would typically integrate with Supabase
    // For now, we'll simulate a successful submission
    // In a real implementation, you would:
    // 1. Initialize Supabase client with your secret key (stored securely)
    // 2. Insert the data into your Supabase database
    // 3. Optionally send confirmation emails
    
    // Simulate async operation
    await new Promise(resolve => setTimeout(resolve, 500));

    // Simulate successful database insertion
    const mockId = `contact_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;

    // Log the submission (in production, you'd save to database)
    console.log('Contact form submission:', {
      id: mockId,
      timestamp: new Date().toISOString(),
      data: validatedData
    });

    const response: ContactResponse = {
      success: true,
      message: "Thank you for your interest! We'll get back to you within 24 hours.",
      id: mockId
    };

    res.status(200).json(response);
  } catch (error) {
    console.error('Contact form error:', error);
    
    if (error instanceof z.ZodError) {
      return res.status(400).json({
        success: false,
        message: "Please check your form data",
        errors: error.errors
      });
    }

    res.status(500).json({
      success: false,
      message: "Something went wrong. Please try again later."
    });
  }
};

// To enable Supabase integration:
// 1. Install Supabase: npm install @supabase/supabase-js
// 2. Set environment variables: SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY
// 3. Create a 'contacts' table in your Supabase database
// 4. Uncomment and use the code below

/*
Example Supabase table schema for 'contacts':
CREATE TABLE contacts (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  name text NOT NULL,
  email text NOT NULL,
  phone text,
  subject text NOT NULL,
  message text NOT NULL,
  preferred_contact_method text,
  goals text[],
  created_at timestamp with time zone DEFAULT timezone('utc'::text, now()) NOT NULL,
  status text DEFAULT 'new'
);
*/
