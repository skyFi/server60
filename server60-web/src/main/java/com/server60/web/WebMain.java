package com.server60.web;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;

/**
 * Created by jack on 15-11-23.
 */
@Configuration
@EnableAutoConfiguration
@ComponentScan
public class WebMain {

    public static void main(String[] args) throws Exception {
        SpringApplication.run(WebMain.class, args);
    }

}
