const WebSocket = require('ws');

// Set up server
const wss = new WebSocket.Server({
    port: 8080
});

// Wire up some logic for the connection event (when a client connects) 
wss.on('connection', function connection(ws) {

    // Wire up logic for the message event (when a client sends something)
    ws.on('message', function incoming(message) {
        console.log('received: %s', message);
        var data = JSON.parse(message)
        // Send a message
        ws.send(JSON.stringify({
            "type": data.type,
            "id": data.id,
            "total": 77,
            "data": [{
                    "ProductID": "f61a06ca-91e5-4642-9234-b006848d5fd8",
                    "ProductName": "Chai",
                    "UnitPrice": 18,
                    "CreatedAt": "1970-01-01T00:00:00.000Z"
                },
                {
                    "ProductID": "308df9df-b466-4d93-b268-9d877bd9e886",
                    "ProductName": "Chang",
                    "UnitPrice": 19,
                    "CreatedAt": "1970-01-01T00:00:00.001Z"
                },
                {
                    "ProductID": "a5388556-99a2-47e3-8d32-84bd91c6e420",
                    "ProductName": "Aniseed Syrup",
                    "UnitPrice": 10,
                    "CreatedAt": "1970-01-01T00:00:00.002Z"
                },
                {
                    "ProductID": "84f7cf3c-e37d-486c-a422-1e050bfcf5d7",
                    "ProductName": "Chef Anton's Cajun Seasoning",
                    "UnitPrice": 22,
                    "CreatedAt": "1970-01-01T00:00:00.003Z"
                },
                {
                    "ProductID": "6571fba6-d53a-49f8-b9d2-514c8eaf5a7a",
                    "ProductName": "Chef Anton's Gumbo Mix",
                    "UnitPrice": 21.35,
                    "CreatedAt": "1970-01-01T00:00:00.004Z"
                },
                {
                    "ProductID": "b3a29150-020c-448e-9413-897fcb8a9abb",
                    "ProductName": "Grandma's Boysenberry Spread",
                    "UnitPrice": 25,
                    "CreatedAt": "1970-01-01T00:00:00.005Z"
                },
                {
                    "ProductID": "cc76a5a4-b5c0-4d45-8ade-87d3abebc350",
                    "ProductName": "Uncle Bob's Organic Dried Pears",
                    "UnitPrice": 30,
                    "CreatedAt": "1970-01-01T00:00:00.006Z"
                },
                {
                    "ProductID": "6b03d21c-1ce9-4f8e-bfa1-e5dbd633101f",
                    "ProductName": "Northwoods Cranberry Sauce",
                    "UnitPrice": 40,
                    "CreatedAt": "1970-01-01T00:00:00.007Z"
                },
                {
                    "ProductID": "49cfe0f1-4448-452c-957b-9b159282a7e0",
                    "ProductName": "Mishi Kobe Niku",
                    "UnitPrice": 97,
                    "CreatedAt": "1970-01-01T00:00:00.008Z"
                },
                {
                    "ProductID": "5f182e0a-a1d0-43ac-8963-75277a3053cd",
                    "ProductName": "Ikura",
                    "UnitPrice": 31,
                    "CreatedAt": "1970-01-01T00:00:00.009Z"
                },
                {
                    "ProductID": "eed49fc0-ab2f-4944-82a7-ed63cbe526b9",
                    "ProductName": "Queso Cabrales",
                    "UnitPrice": 21,
                    "CreatedAt": "1970-01-01T00:00:00.010Z"
                },
                {
                    "ProductID": "517b7870-5207-4a70-8fa9-50666155a829",
                    "ProductName": "Queso Manchego La Pastora",
                    "UnitPrice": 38,
                    "CreatedAt": "1970-01-01T00:00:00.011Z"
                },
                {
                    "ProductID": "c808baaa-1ec4-46bf-becd-af3bc4d2b93e",
                    "ProductName": "Konbu",
                    "UnitPrice": 6,
                    "CreatedAt": "1970-01-01T00:00:00.012Z"
                },
                {
                    "ProductID": "a24b2bc2-20de-45c8-ab90-7e539efe1e76",
                    "ProductName": "Tofu",
                    "UnitPrice": 23.25,
                    "CreatedAt": "1970-01-01T00:00:00.013Z"
                },
                {
                    "ProductID": "97e1a71a-206e-4485-a724-96a06a00ef30",
                    "ProductName": "Genen Shouyu",
                    "UnitPrice": 15.5,
                    "CreatedAt": "1970-01-01T00:00:00.014Z"
                },
                {
                    "ProductID": "141098a5-b1a0-4152-8ba3-a84b30f442e8",
                    "ProductName": "Pavlova",
                    "UnitPrice": 17.45,
                    "CreatedAt": "1970-01-01T00:00:00.015Z"
                },
                {
                    "ProductID": "80f676b8-6ea0-4752-9063-412efb4441b4",
                    "ProductName": "Alice Mutton",
                    "UnitPrice": 39,
                    "CreatedAt": "1970-01-01T00:00:00.016Z"
                },
                {
                    "ProductID": "9c9e0815-6f67-4061-923f-35d02f50451d",
                    "ProductName": "Carnarvon Tigers",
                    "UnitPrice": 62.5,
                    "CreatedAt": "1970-01-01T00:00:00.017Z"
                },
                {
                    "ProductID": "6c99bdb6-b803-4370-a3f7-ea2a4b95414e",
                    "ProductName": "Teatime Chocolate Biscuits",
                    "UnitPrice": 9.2,
                    "CreatedAt": "1970-01-01T00:00:00.018Z"
                },
                {
                    "ProductID": "9d7404e2-9b67-4aff-8fc3-637d04833f8e",
                    "ProductName": "Sir Rodney's Marmalade",
                    "UnitPrice": 81,
                    "CreatedAt": "1970-01-01T00:00:00.019Z"
                },
                {
                    "ProductID": "085f8f08-b688-4e94-b448-13a55a397d2d",
                    "ProductName": "Sir Rodney's Scones",
                    "UnitPrice": 10,
                    "CreatedAt": "1970-01-01T00:00:00.020Z"
                },
                {
                    "ProductID": "15d7b8dd-cd18-4bde-8af6-6a61179f72c2",
                    "ProductName": "Gustaf's Knäckebröd",
                    "UnitPrice": 21,
                    "CreatedAt": "1970-01-01T00:00:00.021Z"
                },
                {
                    "ProductID": "8134ec0e-7c1b-49ec-ab35-920036e8977b",
                    "ProductName": "Tunnbröd",
                    "UnitPrice": 9,
                    "CreatedAt": "1970-01-01T00:00:00.022Z"
                },
                {
                    "ProductID": "a930a3a6-5389-405a-bec8-75caf3784fb6",
                    "ProductName": "Guaraná Fantástica",
                    "UnitPrice": 4.5,
                    "CreatedAt": "1970-01-01T00:00:00.023Z"
                },
                {
                    "ProductID": "635c8398-3290-4861-8c56-43de63138926",
                    "ProductName": "NuNuCa Nuß-Nougat-Creme",
                    "UnitPrice": 14,
                    "CreatedAt": "1970-01-01T00:00:00.024Z"
                },
                {
                    "ProductID": "1616836c-9ccf-4f25-adf9-f327bdd5e5be",
                    "ProductName": "Gumbär Gummibärchen",
                    "UnitPrice": 31.23,
                    "CreatedAt": "1970-01-01T00:00:00.025Z"
                },
                {
                    "ProductID": "62894eec-dd6e-4c31-8fa8-565f90cccdf7",
                    "ProductName": "Schoggi Schokolade",
                    "UnitPrice": 43.9,
                    "CreatedAt": "1970-01-01T00:00:00.026Z"
                },
                {
                    "ProductID": "13f00390-46e2-4443-ad03-b0f0c3747b8d",
                    "ProductName": "Rössle Sauerkraut",
                    "UnitPrice": 45.6,
                    "CreatedAt": "1970-01-01T00:00:00.027Z"
                },
                {
                    "ProductID": "2f848a38-d4ee-44c9-ab78-204cb3a5ce31",
                    "ProductName": "Thüringer Rostbratwurst",
                    "UnitPrice": 123.79,
                    "CreatedAt": "1970-01-01T00:00:00.028Z"
                },
                {
                    "ProductID": "8c5dd5f8-bc53-4b10-9626-1f0cc913d7e6",
                    "ProductName": "Nord-Ost Matjeshering",
                    "UnitPrice": 25.89,
                    "CreatedAt": "1970-01-01T00:00:00.029Z"
                },
                {
                    "ProductID": "afca9ae2-8b23-4c61-8f1d-499ce59c6852",
                    "ProductName": "Gorgonzola Telino",
                    "UnitPrice": 12.5,
                    "CreatedAt": "1970-01-01T00:00:00.030Z"
                },
                {
                    "ProductID": "1f63c7b5-94b4-4dd1-92b2-4c3606a8b96a",
                    "ProductName": "Mascarpone Fabioli",
                    "UnitPrice": 32,
                    "CreatedAt": "1970-01-01T00:00:00.031Z"
                },
                {
                    "ProductID": "36d460ed-15a7-407f-925d-1290ce19c6dc",
                    "ProductName": "Geitost",
                    "UnitPrice": 2.5,
                    "CreatedAt": "1970-01-01T00:00:00.032Z"
                },
                {
                    "ProductID": "692f61ee-3b63-4fda-ac17-54211213ca91",
                    "ProductName": "Sasquatch Ale",
                    "UnitPrice": 14,
                    "CreatedAt": "1970-01-01T00:00:00.033Z"
                },
                {
                    "ProductID": "83555f6d-9223-4743-b288-386293f8a5a6",
                    "ProductName": "Steeleye Stout",
                    "UnitPrice": 18,
                    "CreatedAt": "1970-01-01T00:00:00.034Z"
                },
                {
                    "ProductID": "088221d2-d699-480b-a615-8bfe84641ef5",
                    "ProductName": "Inlagd Sill",
                    "UnitPrice": 19,
                    "CreatedAt": "1970-01-01T00:00:00.035Z"
                },
                {
                    "ProductID": "3c8aaaa0-dcba-4e3b-96eb-323236d38689",
                    "ProductName": "Gravad lax",
                    "UnitPrice": 26,
                    "CreatedAt": "1970-01-01T00:00:00.036Z"
                },
                {
                    "ProductID": "24ea2c41-5dd0-40f1-b88d-49a5bb818773",
                    "ProductName": "Côte de Blaye",
                    "UnitPrice": 263.5,
                    "CreatedAt": "1970-01-01T00:00:00.037Z"
                },
                {
                    "ProductID": "a5b4df63-bd7f-477a-9f94-249973e46d09",
                    "ProductName": "Chartreuse verte",
                    "UnitPrice": 20,
                    "CreatedAt": "1970-01-01T00:00:00.038Z"
                },
                {
                    "ProductID": "ac517fe7-8151-4353-a2ed-8ecb3b4bca5d",
                    "ProductName": "Boston Crab Meat",
                    "UnitPrice": 18.4,
                    "CreatedAt": "1970-01-01T00:00:00.039Z"
                },
                {
                    "ProductID": "dfe87c38-2538-4e26-a50b-3bd5ea73bdc8",
                    "ProductName": "Jack's New England Clam Chowder",
                    "UnitPrice": 9.65,
                    "CreatedAt": "1970-01-01T00:00:00.040Z"
                },
                {
                    "ProductID": "9b0eb1ce-785f-4ca7-913d-f4a8e7e59ab5",
                    "ProductName": "Singaporean Hokkien Fried Mee",
                    "UnitPrice": 14,
                    "CreatedAt": "1970-01-01T00:00:00.041Z"
                },
                {
                    "ProductID": "8f7203cf-e305-4b07-85a0-62af8d4d8d7c",
                    "ProductName": "Ipoh Coffee",
                    "UnitPrice": 46,
                    "CreatedAt": "1970-01-01T00:00:00.042Z"
                },
                {
                    "ProductID": "df69b474-f241-4dec-afd8-43f80e082c6b",
                    "ProductName": "Gula Malacca",
                    "UnitPrice": 19.45,
                    "CreatedAt": "1970-01-01T00:00:00.043Z"
                },
                {
                    "ProductID": "d1564bc8-4ade-4248-b417-26f571967a50",
                    "ProductName": "Rogede sild",
                    "UnitPrice": 9.5,
                    "CreatedAt": "1970-01-01T00:00:00.044Z"
                },
                {
                    "ProductID": "e8d5e225-8b94-444f-bee4-c87b495cb4da",
                    "ProductName": "Spegesild",
                    "UnitPrice": 12,
                    "CreatedAt": "1970-01-01T00:00:00.045Z"
                },
                {
                    "ProductID": "2c6eb2d0-5d9d-4ede-ab1d-fb61ae5de88a",
                    "ProductName": "Zaanse koeken",
                    "UnitPrice": 9.5,
                    "CreatedAt": "1970-01-01T00:00:00.046Z"
                },
                {
                    "ProductID": "86b1cefe-f680-4572-a59b-7ac352df5489",
                    "ProductName": "Chocolade",
                    "UnitPrice": 12.75,
                    "CreatedAt": "1970-01-01T00:00:00.047Z"
                },
                {
                    "ProductID": "5624967b-bdfd-4c74-ab57-3d724456e0f0",
                    "ProductName": "Maxilaku",
                    "UnitPrice": 20,
                    "CreatedAt": "1970-01-01T00:00:00.048Z"
                },
                {
                    "ProductID": "20dc9cc9-0420-4b29-8451-619f973c778c",
                    "ProductName": "Valkoinen suklaa",
                    "UnitPrice": 16.25,
                    "CreatedAt": "1970-01-01T00:00:00.049Z"
                },
                {
                    "ProductID": "e0dfee0f-3070-4b84-ae02-6823b2401efa",
                    "ProductName": "Manjimup Dried Apples",
                    "UnitPrice": 53,
                    "CreatedAt": "1970-01-01T00:00:00.050Z"
                },
                {
                    "ProductID": "cd9031b2-5b2b-4c8e-8f32-ade5799b80f8",
                    "ProductName": "Filo Mix",
                    "UnitPrice": 7,
                    "CreatedAt": "1970-01-01T00:00:00.051Z"
                },
                {
                    "ProductID": "9d7c9276-a23a-4efa-a5a0-93455b7f3001",
                    "ProductName": "Perth Pasties",
                    "UnitPrice": 32.8,
                    "CreatedAt": "1970-01-01T00:00:00.052Z"
                },
                {
                    "ProductID": "9dcfcb61-4bf7-4811-96dc-f6a82ea4e85c",
                    "ProductName": "Tourtière",
                    "UnitPrice": 7.45,
                    "CreatedAt": "1970-01-01T00:00:00.053Z"
                },
                {
                    "ProductID": "46450ccc-a09b-4ae4-bc2e-b7dfd1b5772c",
                    "ProductName": "Pâté chinois",
                    "UnitPrice": 24,
                    "CreatedAt": "1970-01-01T00:00:00.054Z"
                },
                {
                    "ProductID": "8c8d9bc0-46a0-4245-87f5-383df5d0e95a",
                    "ProductName": "Gnocchi di nonna Alice",
                    "UnitPrice": 38,
                    "CreatedAt": "1970-01-01T00:00:00.055Z"
                },
                {
                    "ProductID": "45458ae3-247c-456b-b400-2d2c0cc624b1",
                    "ProductName": "Ravioli Angelo",
                    "UnitPrice": 19.5,
                    "CreatedAt": "1970-01-01T00:00:00.056Z"
                },
                {
                    "ProductID": "8fc235ba-6058-46c4-8947-2430af26aa4f",
                    "ProductName": "Escargots de Bourgogne",
                    "UnitPrice": 13.25,
                    "CreatedAt": "1970-01-01T00:00:00.057Z"
                },
                {
                    "ProductID": "cc14e64c-b93e-4b93-a742-67358906bc1b",
                    "ProductName": "Raclette Courdavault",
                    "UnitPrice": 55,
                    "CreatedAt": "1970-01-01T00:00:00.058Z"
                },
                {
                    "ProductID": "39f4278a-2b74-47f6-bdae-9d16dc0b190d",
                    "ProductName": "Camembert Pierrot",
                    "UnitPrice": 34,
                    "CreatedAt": "1970-01-01T00:00:00.059Z"
                },
                {
                    "ProductID": "b202f824-f3df-4bd7-a847-65b196b95776",
                    "ProductName": "Sirop d'érable",
                    "UnitPrice": 28.5,
                    "CreatedAt": "1970-01-01T00:00:00.060Z"
                },
                {
                    "ProductID": "f8e7f70f-0c34-4d33-80c8-3b0758c3c952",
                    "ProductName": "Tarte au sucre",
                    "UnitPrice": 49.3,
                    "CreatedAt": "1970-01-01T00:00:00.061Z"
                },
                {
                    "ProductID": "51a545b1-91a5-4597-ad22-82f950a2cdc0",
                    "ProductName": "Vegie-spread",
                    "UnitPrice": 43.9,
                    "CreatedAt": "1970-01-01T00:00:00.062Z"
                },
                {
                    "ProductID": "16bf568c-5e65-4f74-ae62-2392a5704882",
                    "ProductName": "Wimmers gute Semmelknödel",
                    "UnitPrice": 33.25,
                    "CreatedAt": "1970-01-01T00:00:00.063Z"
                },
                {
                    "ProductID": "ef04205d-7d51-406e-84e9-8660d048cd89",
                    "ProductName": "Louisiana Fiery Hot Pepper Sauce",
                    "UnitPrice": 21.05,
                    "CreatedAt": "1970-01-01T00:00:00.064Z"
                },
                {
                    "ProductID": "179e814d-c7fd-4365-a7ea-10e71ca71627",
                    "ProductName": "Louisiana Hot Spiced Okra",
                    "UnitPrice": 17,
                    "CreatedAt": "1970-01-01T00:00:00.065Z"
                },
                {
                    "ProductID": "a25b44a4-319d-44f3-986e-535e467dae7a",
                    "ProductName": "Laughing Lumberjack Lager",
                    "UnitPrice": 14,
                    "CreatedAt": "1970-01-01T00:00:00.066Z"
                },
                {
                    "ProductID": "110e6ae9-153f-4d41-a380-8a145a77132c",
                    "ProductName": "Scottish Longbreads",
                    "UnitPrice": 12.5,
                    "CreatedAt": "1970-01-01T00:00:00.067Z"
                },
                {
                    "ProductID": "da1a5284-a455-4d7e-8d7f-fd1f22144a07",
                    "ProductName": "Gudbrandsdalsost",
                    "UnitPrice": 36,
                    "CreatedAt": "1970-01-01T00:00:00.068Z"
                },
                {
                    "ProductID": "e10ab248-216b-4492-8486-9fb7d580db4c",
                    "ProductName": "Outback Lager",
                    "UnitPrice": 15,
                    "CreatedAt": "1970-01-01T00:00:00.069Z"
                },
                {
                    "ProductID": "d81b2bd4-e773-4d0c-9da9-fc2abc65ed9f",
                    "ProductName": "Flotemysost",
                    "UnitPrice": 21.5,
                    "CreatedAt": "1970-01-01T00:00:00.070Z"
                },
                {
                    "ProductID": "6a251c10-40bc-4d2f-83de-e5937505959d",
                    "ProductName": "Mozzarella di Giovanni",
                    "UnitPrice": 34.8,
                    "CreatedAt": "1970-01-01T00:00:00.071Z"
                },
                {
                    "ProductID": "bfabc5be-9a54-43d2-8b79-bebfabd2a19d",
                    "ProductName": "Röd Kaviar",
                    "UnitPrice": 15,
                    "CreatedAt": "1970-01-01T00:00:00.072Z"
                },
                {
                    "ProductID": "435013bf-9cfc-4bde-92df-8ed0d2d6d23b",
                    "ProductName": "Longlife Tofu",
                    "UnitPrice": 10,
                    "CreatedAt": "1970-01-01T00:00:00.073Z"
                },
                {
                    "ProductID": "32d63367-85dc-40eb-a79d-581e0c26bd88",
                    "ProductName": "Rhönbräu Klosterbier",
                    "UnitPrice": 7.75,
                    "CreatedAt": "1970-01-01T00:00:00.074Z"
                },
                {
                    "ProductID": "475afb16-385d-4318-b144-4e63e5abb093",
                    "ProductName": "Lakkalikööri",
                    "UnitPrice": 18,
                    "CreatedAt": "1970-01-01T00:00:00.075Z"
                },
                {
                    "ProductID": "351ec34e-f5a1-4541-ba05-24bc1f64f74f",
                    "ProductName": "Original Frankfurter grüne Soße",
                    "UnitPrice": 13,
                    "CreatedAt": "1970-01-01T00:00:00.076Z"
                }
            ]
        }));
    });

    setInterval(() => {
        var random = Math.floor(Math.random() * 100) + 1;
        ws.send(JSON.stringify({
            "type": 'push-create',
            "id": "f61a06ca-91e5-4642-9234-b006848d5f" + random,
            "data": [{
                "ProductID": "f61a06ca-91e5-4642-9234-b006848d5f" + random,
                "ProductName": "koko",
                "UnitPrice": Math.floor(Math.random() * 100) + 1  ,
                "CreatedAt": "1970-01-01T00:00:00.000Z"
            }]
        }));
    }, 500);



});