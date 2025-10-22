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
        };
        Insert: {
          id?: string;
          created_at?: string;
          title: string;
          content: string;
          is_published?: boolean;
        };
        Update: {
          id?: string;
          created_at?: string;
          title?: string;
          content?: string;
          is_published?: boolean;
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
