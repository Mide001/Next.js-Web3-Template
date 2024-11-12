# 🚀 Next.js Web3 Boilerplate

Hey there! 👋 Tired of setting up the same Web3 project structure over and over? Me too! That's why I created this boilerplate to save us all some precious time and headaches.

## ✨ What's Included?

This boilerplate comes packed with the good stuff:
- ⚡ [Next.js](https://nextjs.org/) - The React framework for production
- 🎨 [TailwindCSS](https://tailwindcss.com/) - A utility-first CSS framework
- 🌈 [RainbowKit](https://www.rainbowkit.com/) - The best way to connect a wallet
- ⛓️ [wagmi](https://wagmi.sh/) - React Hooks for Ethereum
- 🔥 And more goodies to make your Web3 development life easier!

## 🚦 Getting Started

1. First, clone this bad boy:
```bash
git clone https://github.com/mide001/Next.js-Web3-Template
cd Next.js-Web3-Template
```

2. Install the dependencies:
```bash
npm install
# or
yarn
# or
pnpm install
```

3. Create your environment variables:
```bash
cp .env.development.local 
```

4. Fire it up:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the magic! ✨

## 🛠️ Configuration

### Environment Variables

Create a `.env.development.local` file with these variables:
```plaintext
NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID=your_project_id_here
```

### Supported Networks

By default, this boilerplate supports:
- Base Mainnet


Want to add more? Check out `config/networks.ts`!

## 🎨 Styling

This project uses TailwindCSS for styling. Check out `tailwind.config.js` for customization options.

## 🔒 Web3 Features

- 👛 Wallet connection with RainbowKit
- 🔄 Auto network switching
- 💰 ETH balance display
- 📝 Sign messages
- 🤝 Contract interactions

## 🤝 Contributing

Got ideas to make this better? Awesome! Here's how you can help:

1. Fork it
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

## 💖 Support

If this boilerplate saved you some time, consider giving it a ⭐️ on GitHub! It means a lot!

## 🙏 Acknowledgments

Big thanks to:
- The Next.js team
- RainbowKit developers
- TailwindCSS community
- And all the awesome Web3 developers out there!

---

Made with ❤️ by techwithmide - Let's build the decentralized future together! 🌍# Next.js-Web3-Template
