import { CollectionConfig } from 'payload/types';



const NewsSummaries: CollectionConfig = {
    slug: 'news_summaries',
    admin: {
        useAsTitle: 'Headline', // Field name that will be used as the title in the admin panel
    },
    fields: [
        {
            name: 'Headline', // Ensure this matches the exact field name in MongoDB
            type: 'text',
            label: 'Headline', // Optional: Label for better readability
            required: true,
        },
        {
            name: 'Category', // Ensure this matches the exact field name in MongoDB
            type: 'text',
            label: 'Category', // Optional: Label for better readability
            required: true,
        },
        {
            name: 'Summary', // Ensure this matches the exact field name in MongoDB
            type: 'textarea',
            label: 'Summary', // Optional: Label for better readability
            required: true,
        },
        {
            name: 'sources', // Ensure this matches the exact field name in MongoDB
            type: 'array',
            label: 'Sources', // Optional: Label for better readability
            fields: [
                {
                    name: 'SourceName', // Ensure this matches the exact field name in MongoDB
                    type: 'text',
                    label: 'Source Name', // Optional: Label for better readability
                    required: true,
                },
                {
                    name: 'SourceUrl', // Ensure this matches the exact field name in MongoDB
                    type: 'text',
                    label: 'Source URL', // Optional: Label for better readability
                    required: true,
                },
                {
                    name: 'keyfacts', // Ensure this matches the exact field name in MongoDB
                    type: 'text',
                    label: 'Key Facts', // Optional: Label for better readability
                    required: true,
                },

            ],
        },
        {
            name: 'Image_source_name', // Ensure this matches the exact field name in MongoDB
            type: 'text',
            label: 'Image Source Name', // Optional: Label for better readability
            required: true,
        },
        {
            name: 'image_url', // Ensure this matches the exact field name in MongoDB
            type: 'text',
            label: 'Image URL', // Optional: Label for better readability
            required: true,
        },
        {
            name: 'created_at', // Ensure this matches the exact field name in MongoDB
            type: 'text',
            label: 'Created At', // Optional: Label for better readability
            required: true,
        },

    ],
};

export default NewsSummaries;
