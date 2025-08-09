export interface DemoResponse {
  message: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  subject: "membership" | "personal_training" | "group_classes" | "general";
  message: string;
  preferredContactMethod?: "email" | "phone";
  goals?: string[];
}

export interface ContactResponse {
  success: boolean;
  message: string;
  id?: string;
  errors?: Array<{
    code: string;
    message: string;
    path: (string | number)[];
  }>;
}
