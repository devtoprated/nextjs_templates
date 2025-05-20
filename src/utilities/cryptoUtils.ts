import CryptoJS from 'crypto-js';

const secretKey = '543b6c717dafda2cc4031bb37e6d38aa'; // 32 characters (256 bits) key

export function encryptAgentId(agentId: string) {
  const encrypted = CryptoJS.AES.encrypt(agentId, secretKey).toString();
  const base64Encrypted = Buffer.from(encrypted).toString('base64');
  const alphanumericEncrypted = base64Encrypted.replace(/[^a-zA-Z0-9]/g, '');
  return alphanumericEncrypted;
}

export function decryptAgentId(encryptedAgentId: string) {
  const base64Encrypted = Buffer.from(encryptedAgentId, 'base64').toString();
  const bytes = CryptoJS.AES.decrypt(base64Encrypted, secretKey);
  const decrypted = bytes.toString(CryptoJS.enc.Utf8);
  return decrypted;
}


export function encryptData(agentId: string): string {
  // Encrypt the agentId with AES and convert to base64
  const encrypted = CryptoJS.AES.encrypt(agentId, secretKey).toString();
  return encrypted; // Return the encrypted string directly
}

