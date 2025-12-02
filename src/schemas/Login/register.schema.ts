import { z } from "zod"

export const registerFormSchema = z.object({
  username: z.string()
    .email("Formato de E-mail Inválido")
    .nonempty("E-mail é obrigatório"),
  name: z.string()
    .nonempty("Nome é obrigatório"),
  password: z.string()
    .nonempty("Senha é obrigatório"),
})

export type registerFormData = z.infer<typeof registerFormSchema>