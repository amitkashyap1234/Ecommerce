
## Demo

https://amit-ecom.vercel.app



## Run Locally

Clone the project

```bash
  git clone https://github.com/Pinqua/Ecommerce.git
```

Go to the project directory

```bash
  cd Ecommerce
```

Install dependencies

```bash
  npm install
```


Create a **.env.local** file inside project directory with fields given below.

```bash
  # Authentication
  GOOGLE_ID=
  GOOGLE_SECRET=

  # Need to add this to... google cloud
  # http://localhost:3000/api/auth/callback/google


  NEXTAUTH_URL=http://localhost:3000


  HOST=http://localhost:3000



  # Mongodb Database
  
  # Your database name
  MONGODB_DB=
  # Add monogdb connection url 
  MONGO_URI=
  # Add mongodb connection url but with driver node.js and version 2.2.12 or later 
  MONGODB_URI=
  
```

Start the server

```bash
  npm run dev
```

## Contributing

Contributions are always welcome!

  
## Appendix

Data inserted in the database was pulled form <a href="https://fakestoreapi.com/">fakeStoreAPI</a> to kickstart the project.

  
## License

[MIT](https://choosealicense.com/licenses/mit/)

<br/>
<br/>

<p align="center">If you liked the repository, show your  ❤️  by starring and forking it.</p>
  
