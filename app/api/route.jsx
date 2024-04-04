import connectDB from "@/libs/mongodb"
import TodoModel from "@/model/Todo"
import { NextResponse } from "next/server"

export async function GET(req) {
	await connectDB()
	try {
		const todos = await TodoModel.find()
		console.log("Items are Founded")
		todos.forEach((todo) => {
			console.log(todo._id + " ----- founded")
		})
		return NextResponse.json({ todos }, { status: 201 })
	} catch (err) {
		console.log("Failed to Parse from MongoDB", err)
	}
}

export async function POST(req) {
	const { name, items } = await req.json()
	await connectDB()

	try {
		const todo = await TodoModel.create({ name, items })
		console.log("The item is created " + todo._id + " ----- created")
		return NextResponse.json({ todo }, { status: 201 })
	} catch (err) {
		console.log("Failed to Create the item", err)
	}
}
