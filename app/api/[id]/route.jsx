import connectDB from "@/libs/mongodb"
import TodoModel from "@/model/Todo"
import { NextResponse } from "next/server"

export async function GET(req, { params }) {
	const { id } = params
	await connectDB()

	try {
		const todo = await TodoModel.findOne({ _id: id })
		return NextResponse.json(todo, { status: 201 })
	} catch (err) {
		console.log("Failed to Find the item", err)
	}
}

export async function PUT(req, { params }) {
	const { id } = params
	await connectDB()
	const { name, items } = await req.json()
	try {
		const todo = await TodoModel.findOneAndUpdate({ _id: id }, { name, items }, { new: true })
		console.log("The item is updated")
		return NextResponse.json(todo, { status: 201 })
	} catch (err) {
		console.log("Failed to Update the item", err)
	}
}

export async function DELETE(req, { params }) {
	const { id } = params
	await connectDB()
	try {
		const todo = await TodoModel.findOneAndDelete({ _id: id })
		console.log("The item is deleted " + id + " ----- deleted")
		return NextResponse.json(todo, { status: 201 })
	} catch (err) {
		console.log("Failed to Delete the item", err)
	}
}
