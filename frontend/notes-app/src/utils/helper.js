export const validateEmail = (email) => {
  const regex = /\S+@\S+\.\S+/;
  return regex.test(email);
};
// \S+: Satu atau lebih karakter non-spasi sebelum tanda @.
// @: Simbol "@" yang memisahkan nama pengguna dan domain.
// \S+: Satu atau lebih karakter non-spasi setelah tanda @.
// \.: Simbol titik (.) yang memisahkan domain dengan ekstensi (seperti .com, .net, dll).
// \S+: Satu atau lebih karakter non-spasi setelah titik (.) untuk bagian ekstensi.

// regex: Ini adalah regular expression yang digunakan untuk memeriksa format email.

export const getInitials = (name) => {
  if (!name) return "";
  const words = name.split(" ");
  let initials = "";

  for (let i = 0; i < Math.min(words.length, 2); i++) {
    initials += words[i][0];
  }

  return initials.toUpperCase();
};
