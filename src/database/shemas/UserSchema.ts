import { tableSchema } from "@nozbe/watermelondb";

const userSchema = tableSchema({
  name: "users",
  columns: [
    {
      name: "user_id",
      type: "string"
    },
    {
      name: "name",
      type: "string"
    },
  ]
})

export { userSchema }