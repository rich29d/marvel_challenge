export const addPublicKey = publicKey => ({
  type: "ADD_PUBLIC_KEY",
  publicKey,
});

export const addPrivateKey = privateKey => ({
  type: "ADD_PRIVATE_KEY",
  privateKey,
});