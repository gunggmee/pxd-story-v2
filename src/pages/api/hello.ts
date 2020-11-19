import { NextApiRequest, NextApiResponse } from "next"

export default async (req: NextApiRequest, res: NextApiResponse<string[]>): Promise<void> => {
  res.status(200).json([])
}
