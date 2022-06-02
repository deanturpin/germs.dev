---
title: Cryptography
date: 2019-09-15
tags:
- revision
- cryptography
---

# Cryptography

## Symmetric versus asymmetric encryption
The most widely used symmetric algorithm is AES-128, AES-192, and AES-256. The
main disadvantage of the symmetric key encryption is that all parties involved
have to exchange the key used to encrypt the data before they can decrypt it.

With asymmetric keys the server generates a pair of keys: public and private.
The private key is kept safe but the public key can be sent in the clear to the
client. The client can use the public key to encrypt a message that can only be
decrypted with the private key. Also the private key cannot be derived from the
public.

The
[Diffie-Hellman
algorithm](https://en.wikipedia.org/wiki/Diffie%E2%80%93Hellman_key_exchange)
doesn't share keys during the key exchange, you're creating a key together.
This key can then be used to encrypt subsequent communications using a
symmetric key cipher.

To avoid these vulnerabilities, authors recommend use of [elliptic curve
cryptography](https://en.wikipedia.org/wiki/Elliptic-curve_cryptography), for
which no similar attack is known. Failing that, they recommend that the order,
p, of the Diffie–Hellman group should be at least 2048 bits. They estimate that
the pre-computation required for a 2048-bit prime is 109 times more difficult
than for 1024-bit primes.

## Forward secrecy
Produce different keys for each session: cracking one session doesn't mean you
have access to any others.

Securing data as it passes through the Internet usually requires protecting it
in two ways:

1. Confidentiality: assuring no one except the intended recipients can read the
data
1. Integrity: assuring no one can modify or tamper the data in transit

## Password hashing
OWASP - General hashing algorithms (eg, MD5, SHA-1/256/512) are not recommended
for password storage. Instead an algorithm specifically designed for the
purpose should be used.

## Red/black
RED is plaintext -- unencrypted -- BLACK is ciphertext. Can be applied to
physical connections.

## References
- PBKDF2
- bcrypt - an adaptive function: over time, the iteration count can be
increased to make it slower, so it remains resistant to brute-force search
attacks even with increasing computation power
- scrypt
- Kerckhoffs's principle: A cryptosystem should be secure even if everything
about the system, except the key, is public knowledge
- [wiki/TLS
handshake](https://en.wikipedia.org/wiki/Transport_Layer_Security#TLS_handshake)
- IPsec
