function genererMotDePasse() {
  const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let mdp = "";
  for (let i = 0; i < 8; i++) {
    const randomIndex = Math.floor(Math.random() * chars.length);
    mdp += chars[randomIndex];
  }
  return mdp;
}

console.log(`Mot de passe généré : ${genererMotDePasse()}`);
