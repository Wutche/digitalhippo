import {initTRPC} from "@trpc/server"


const t = initTRPC.context().create()

export const router = t.router

// PUBLIC API
export const publicProcedure = t.procedure