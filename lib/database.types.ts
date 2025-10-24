export type Database = {
  public: {
    Tables: {
      blogs: {
        Row: {
          id: string;
          created_at: string;
          title: string;
          content: string;
          is_published: boolean;
          image_url?: string | null; // Added image_url field
        };
        Insert: {
          id?: string;
          created_at?: string;
          title: string;
          content: string;
          is_published?: boolean;
          image_url?: string | null; // Added image_url field
        };
        Update: {
          id?: string;
          created_at?: string;
          title?: string;
          content?: string;
          is_published?: boolean;
          image_url?: string | null; // Added image_url field
        };
      };
      leads: {
        Row: {
          id: string;
          created_at: string;
          name: string;
          email: string;
          message: string;
          status: string; // e.g., 'new', 'contacted', 'converted'
        };
        Insert: {
          id?: string;
          created_at?: string;
          name: string;
          email: string;
          message: string;
          status?: string;
        };
        Update: {
          id?: string;
          created_at?: string;
          name?: string;
          email?: string;
          message?: string;
          status?: string;
        };
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      [_ in never]: never;
    };
    Enums: {
      [_ in never]: never;
    };
    CompositeTypes: {
      [_ in never]: never;
    };
  };
};
