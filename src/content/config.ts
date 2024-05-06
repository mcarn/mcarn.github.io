import { defineCollection, z } from "astro:content"

const blog = defineCollection({
	type: "content",
	// Type-check frontmatter using a schema
	schema: z.object({
		title: z.string(),
		description: z.string(),
		// Transform string to Date object
		pubDate: z.coerce.date(),
		updatedDate: z.coerce.date().optional(),
		heroImage: z.string().optional(),
	}),
})

const recipeCollection = defineCollection({
	type: "content",
	schema: z.object({
		name: z.string(),
		cusine: z.string(),
		preparationTime: z.number(),
		cookingTime: z.number(),
		pubDate: z.coerce.date(),
		updatedDate: z.coerce.date().optional(),
		heroImage: z.string().optional(),
		image: z.string().optional(),
		rank: z.number().gte(0).lte(10),
		ingredients: z.array(z.string()),
		original: z.array(z.string()).optional(),
	}),
})

export const collections = { blog, recipes: recipeCollection }
