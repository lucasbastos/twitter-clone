import { createUser } from "../db/user";

export default defineEventHandler(async (event: any) => {
    const body = await readBody(event)

    const user = await createUser(body.email, body.password)
    console.log(body)
    return { body }
  })