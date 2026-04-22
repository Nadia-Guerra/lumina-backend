# Goal Description

Implement an endpoint that retrieves makeup product information by ID from the public Makeup API and uses the Gemini API to generate personalized usage recommendations for that specific product.

## User Review Required

> [!IMPORTANT]
> - You will need to get a Gemini API Key from Google AI Studio.
> - Once you have it, add `GEMINI_API_KEY="your-api-key"` to your `.env` file for the Gemini service to work.
> - I will set up the Express application in `src/index.ts` since it currently just logs "Hello, World!". This will start a local server on port 3000 (or the port defined in your `.env`).

## Proposed Changes

### Configuration and Setup

#### [MODIFY] package.json
- Install the official `@google/genai` SDK to interact with Gemini.

#### [MODIFY] src/index.ts
- Initialize the Express app, apply middlewares (cors, json parsing), and mount the new routes.

---

### Services

#### [NEW] src/services/makeup.service.ts
- Create a function to fetch product details from `http://makeup-api.herokuapp.com/api/v1/products/${id}.json`.

#### [NEW] src/services/gemini.service.ts
- Create a function `getUsageRecommendation(product)` that takes the product details (name, brand, description, category) and prompts Gemini to provide a customized step-by-step usage recommendation or tip.

---

### Controllers and Routes

#### [NEW] src/controllers/recommendation.controller.ts
- Create the controller that receives the product ID from the URL, calls the Makeup service, then passes the product to the Gemini service, and returns the AI-generated recommendation alongside the product details.

#### [NEW] src/routes/recommendation.routes.ts
- Define a GET route: `/api/recommendations/:id` and link it to the controller.

## Verification Plan

### Automated/Manual Verification
- Start the server using `npm run dev`.
- Make a GET request to `http://localhost:3000/api/recommendations/1048` (1048 is a known Colourpop Lippie Pencil).
- Verify that the response includes both the product info and a helpful, Gemini-generated recommendation on how to use it.
