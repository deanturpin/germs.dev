# Cryptography

## Symmetric versus asymmetric encryption

The most widely used symmetric algorithm is AES-128, AES-192, and AES-256. The main disadvantage of the symmetric key encryption is that all parties involved have to exchange the key used to encrypt the data before they can decrypt it.

With asymmetric keys the server generates a pair of keys: public and private. The private key is kept safe but the public key can be sent in the clear to the client. The client can use the public key to encrypt a message that can only be decrypted with the private key. Also the private key cannot be derived from the public.

The [Diffie-Hellman algorithm](https://en.wikipedia.org/wiki/Diffie%E2%80%93Hellman_key_exchange) doesn't share keys during the key exchange, you're creating a key together. This key can then be used to encrypt subsequent communications using a symmetric key cipher.

To avoid these vulnerabilities, authors recommend use of [elliptic curve cryptography](https://en.wikipedia.org/wiki/Elliptic-curve_cryptography), for which no similar attack is known. Failing that, they recommend that the order, p, of the Diffie–Hellman group should be at least 2048 bits. They estimate that the pre-computation required for a 2048-bit prime is 109 times more difficult than for 1024-bit primes.

## PKI

PKI, or Public Key Infrastructure, is a system of cryptographic protocols, technologies, and services that enable secure communication and authentication over public networks such as the internet. PKI utilizes public key encryption to establish trust and verify the identities of users and entities involved in digital transactions.

Here's how PKI works:

1. Key Generation: The PKI system generates a pair of cryptographic keys for each user or entity - a public key and a private key. These keys are mathematically related, but they cannot be derived from one another. The public key can be freely shared with others, while the private key must remain secret.

2. Certificate Authorities (CAs): CAs are trusted entities that validate the identities of users and bind their public keys to their identities. They issue digital certificates, which are essentially electronic documents that contain the user's public key, identifying information, and the CA's digital signature. CAs act as a trusted third party in the PKI system.

3. Certificate Issuance: When a user or entity requests a digital certificate, the CA verifies their identity through a process called certificate enrollment. This typically involves providing proof of identity, such as presenting government-issued identification or undergoing identity verification checks.

4. Certificate Distribution: Once the CA verifies the identity and authenticity of the user or entity, they issue the digital certificate. This certificate is then distributed to the user or entity, usually in the form of a file or embedded in a smart card.

5. Certificate Validation: When a user wants to communicate securely with another user or entity, they can obtain the recipient's digital certificate from a trusted source or retrieve it directly from the recipient's published certificate repository. The sender can then use the CA's public key, which is pre-installed in the user's software or device, to validate the authenticity and integrity of the received digital certificate.

6. Encryption and Digital Signatures: With the recipient's validated digital certificate, the sender can encrypt their message using the recipient's public key. The recipient can then decrypt the message using their private key. Similarly, the sender can digitally sign the message using their private key, and the recipient can verify the signature using the sender's public key. These encryption and digital signature mechanisms ensure confidentiality, integrity, and non-repudiation of digital communications.

7. Certificate Revocation: In cases where a user's private key is compromised or becomes invalid, the corresponding digital certificate needs to be revoked. CAs maintain certificate revocation lists (CRLs) or use online certificate status protocol (OCSP) to provide real-time information about the validity and status of digital certificates. This ensures that users only trust valid and unrevoked certificates.

PKI plays a crucial role in various applications, including secure online transactions, digital signatures, secure email, VPNs, and SSL/TLS for secure web browsing. It provides a robust framework for establishing trust, verifying identities, and ensuring the confidentiality, integrity, and authenticity of digital communications.

## Forward secrecy

Produce different keys for each session: cracking one session doesn't mean you have access to any others. Securing data as it passes through the Internet usually requires protecting it in two ways:

1. Confidentiality: assuring no one except the intended recipients can read the data
1. Integrity: assuring no one can modify or tamper the data in transit

## Password hashing

OWASP - General hashing algorithms (eg, MD5, SHA-1/256/512) are not recommended
for password storage. Instead an algorithm specifically designed for the
purpose should be used.

## Red/black

RED is plaintext -- unencrypted -- BLACK is ciphertext. Can also be applied to physical connections.

## References

- PBKDF2
- bcrypt: an adaptive function: over time, the iteration count can be
increased to make it slower, so it remains resistant to brute-force search
attacks even with increasing computation power
- scrypt
- Kerckhoffs's principle: A cryptosystem should be secure even if everything
about the system, except the key, is public knowledge
- [wiki/TLS handshake](https://en.wikipedia.org/wiki/Transport_Layer_Security#TLS_handshake)
- IPsec
