import { supabase } from './supabaseClient';
import { Database } from './database.types';

type Blog = Database['public']['Tables']['blogs']['Row'];
type Lead = Database['public']['Tables']['leads']['Row'];

export async function getBlogStats() {
  const { data: blogs, error } = await supabase
    .from('blogs')
    .select('is_published');

  if (error) {
    console.error('Error fetching blog stats:', error);
    return { published: 0, unpublished: 0 };
  }

  const published = blogs.filter(blog => blog.is_published).length;
  const unpublished = blogs.length - published;

  return { published, unpublished };
}

export async function getLeadStats() {
  const { data: leads, error } = await supabase
    .from('leads')
    .select('id'); // Only need ID for count

  if (error) {
    console.error('Error fetching lead stats:', error);
    return { total: 0 };
  }

  return { total: leads.length };
}

export async function getLeadsByStatus() {
  const { data: leads, error } = await supabase
    .from('leads')
    .select('status');

  if (error) {
    console.error('Error fetching leads by status:', error);
    return [];
  }

  const statusCounts: { [key: string]: number } = {};
  leads.forEach(lead => {
    statusCounts[lead.status] = (statusCounts[lead.status] || 0) + 1;
  });

  return Object.keys(statusCounts).map(status => ({
    name: status,
    value: statusCounts[status],
  }));
}
