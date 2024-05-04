"use server";

import { createClient } from "@/utils/supabase/server";

export default async function TodoPage() {

  const supabase = createClient();

let { data: todos} = await supabase.from('todos').select('*');
          
return <div>{JSON.stringify(todos)}</div>;

}
