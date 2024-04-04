import { model, models, Schema } from "mongoose"

const TodoSchema = new Schema(
	{
		name: {
			type: String,
			required: true,
		},
		items: {
			type: Array,
			required: true,
		},
	},
	{ timestamps: true }
)

const TodoModel = models.Todo || model("Todo", TodoSchema)

export default TodoModel
