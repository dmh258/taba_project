package com.example.demo;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.URL;
import java.io.OutputStream;


    public class HttpRequestExample {

        public static void main(String[] args) {
            sendGetRequest("http://localhost:8080/server-url");
            sendPostRequest("http://localhost:8080/api/data");
        }

        private static void sendGetRequest(String urlStr) {
            try {
                URL url = new URL(urlStr);
                HttpURLConnection connection = (HttpURLConnection) url.openConnection();
                connection.setRequestMethod("GET");

                int responseCode = connection.getResponseCode();
                if (responseCode == HttpURLConnection.HTTP_OK) {
                    BufferedReader reader = new BufferedReader(new InputStreamReader(connection.getInputStream()));
                    String line;
                    StringBuilder response = new StringBuilder();
                    while ((line = reader.readLine()) != null) {
                        response.append(line);
                    }
                    reader.close();
                    System.out.println("GET Response: " + response.toString());
                } else {
                    System.out.println("GET request failed. Response Code: " + responseCode);
                }
                connection.disconnect();
            } catch (IOException e) {
                e.printStackTrace();
            }
        }

        private static void sendPostRequest(String urlStr) {
            try {
                URL url = new URL(urlStr);
                HttpURLConnection connection = (HttpURLConnection) url.openConnection();
                connection.setRequestMethod("POST");
                connection.setDoOutput(true);
                System.out.println("Http connection success");

                // Set request body data
                String requestBody = "Hello, Server!";
                OutputStream outputStream = connection.getOutputStream();
                System.out.println("requestBody.getBytes() : " + requestBody.getBytes());
                outputStream.write(requestBody.getBytes());
                outputStream.flush();
                outputStream.close();
                System.out.println("outputStream success");

                int responseCode = connection.getResponseCode();
                if (responseCode == HttpURLConnection.HTTP_OK) {
                    BufferedReader reader = new BufferedReader(new InputStreamReader(connection.getInputStream()));
                    String line;
                    StringBuilder response = new StringBuilder();
                    System.out.println("StringBuilder success");
                    while ((line = reader.readLine()) != null) {
                        response.append(line);
                    }
                    reader.close();
                    System.out.println("response : " + response);
                    System.out.println("POST Response: " + response.toString());
                } else {
                    System.out.println("POST request failed. Response Code: " + responseCode);
                }
                connection.disconnect();
            } catch (IOException e) {
                e.printStackTrace();
            }
        }
    }
