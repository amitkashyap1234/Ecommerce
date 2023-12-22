
## Demo

https://amit-ecom.vercel.app

## Screenshots

<img width="1711" alt="Screenshot 2023-12-22 at 4 50 26 PM" src="https://github.com/amitkashyap1234/Ecommerce/assets/154587111/3560036b-8193-45c6-ad4d-0669154c8e28">
<img width="1708" alt="Screenshot 2023-12-22 at 4 51 09 PM" src="https://github.com/amitkashyap1234/Ecommerce/assets/154587111/00d43f3b-517d-41a2-8aeb-ea400b8e84e2">
<img width="1710" alt="Screenshot 2023-12-22 at 4 51 03 PM" src="https://github.com/amitkashyap1234/Ecommerce/assets/154587111/4026f240-aa0d-4614-a505-47fdcfc63bcf">
<img width="1711" alt="Screenshot 2023-12-22 at 4 50 43 PM" src="https://github.com/amitkashyap1234/Ecommerce/assets/154587111/03df6015-7850-433b-a0ba-5a6b5dfda3a0">
<img width="1679" alt="Screenshot 2023-12-22 at 4 50 34 PM" src="https://github.com/amitkashyap1234/Ecommerce/assets/154587111/03dcb889-9ad5-4e8a-a466-af76f0f03b93">



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
  
