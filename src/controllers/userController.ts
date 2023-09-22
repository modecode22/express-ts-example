import { Request, Response } from "express";
import supabase from "../config/supabaseClient";

// List all users
export const listUsers = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const { data, error } = await supabase.from("users").select("*");

  if (error) {
    return res.status(500).json({ error });
  }

  return res.json(data);
};

// Get a user by ID
export const getUserById = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const id = req.params.id;

  const { data, error } = await supabase
    .from("users")
    .select("*")
    .eq("id", id)
    .single();

  if (error) {
    return res.status(500).json({ error });
  }

  return res.json(data);
};

// ... more CRUD operations
