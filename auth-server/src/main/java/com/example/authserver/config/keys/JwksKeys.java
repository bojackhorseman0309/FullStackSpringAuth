package com.example.authserver.config.keys;

import com.nimbusds.jose.jwk.RSAKey;

import java.security.KeyPairGenerator;
import java.security.NoSuchAlgorithmException;
import java.security.interfaces.RSAPrivateKey;
import java.security.interfaces.RSAPublicKey;
import java.util.UUID;

public class JwksKeys {

    public static RSAKey generateRSAKey() {
        try {
            KeyPairGenerator keyPairGenerator = KeyPairGenerator.getInstance("RSA");
            keyPairGenerator.initialize(2048);
            var keyPair = keyPairGenerator.generateKeyPair();

            RSAPublicKey rsaPublicKey = (RSAPublicKey) keyPair.getPublic();
            RSAPrivateKey rsaPrivateKey = (RSAPrivateKey) keyPair.getPrivate();

            return new RSAKey.Builder(rsaPublicKey)
                    .privateKey(rsaPrivateKey)
                    .keyID(UUID.randomUUID()
                            .toString())
                    .build();
        } catch (NoSuchAlgorithmException e) {
            throw new RuntimeException("Problem generating the keys");
        }
    }
}
