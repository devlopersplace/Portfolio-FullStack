package com.himanshu.portfolio.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.Customizer;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
@EnableWebSecurity
public class SecurityConfig {

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        http
            // 1. Disable CSRF (Cross-Site Request Forgery) since we are building a stateless REST API
            .csrf(csrf -> csrf.disable())
            
            // 2. Enable CORS so your React app can securely communicate with this backend
            .cors(Customizer.withDefaults())
            
            // 3. Set up the endpoint protection rules
            .authorizeHttpRequests(auth -> auth
                // Allow anyone to VIEW your projects (Public GET requests)
                .requestMatchers(HttpMethod.GET, "/api/projects/**").permitAll()
                
                // Require a password for everything else (Private POST, PUT, DELETE requests)
                .anyRequest().authenticated()
            )
            
            // 4. Use Basic Authentication (Standard for simple APIs and Postman testing)
            .httpBasic(Customizer.withDefaults());

        return http.build();
    }
}
