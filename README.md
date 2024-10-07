# Short Links

> A tool to shorten a long link and create a short URL easy to share on different platform..

## How does a URL shortener work?

At a high level, the URL shortener executes the following operations:

![shortener-url-hld](https://github.com/user-attachments/assets/ab3a3fc5-cca8-4205-961f-4f85ddd31560)

- The server generates a unique short URL for each long URL
- The server encodes the short URL for readability
- The server persists the short URL in the data store
- The server redirects the client to the original long URL against the short URL

## App flow

![app-flow](https://github.com/user-attachments/assets/f7bd7cde-b4b5-4a22-bd7f-fb1fd4d2125d)

> **TIPS:** It’s always a good idea to ask interviewer what features are expected in the service.

## Questions to ask

### Candidate

1. What are the use cases of the system?
2. What is the amount of Daily Active Users (DAU) for writes?
3. How many years should we persist the short URL by default?
4. What is the anticipated read: write ratio of the system?
5. What is the usage pattern of the shortened URL?
6. Who will use the URL shortener service?
7. What is the reasonable length of a short URL?

### Interviewer

1. URL shortening and redirection to the original long URL
2. 100 million DAU
3. 5 years
4. 100: 1
5. Most of the shortened URLs will be accessed only once after the creation
6. General public
7. At most 9 to 16 characters

## Requirements

- **Shortening URLs:** Given a long URL generate a unique short URL
- **Redirecting URLs:** when short URL hits, redirect to the original long URL
- **Scalability:** Handle millions of short URLs and redirections

### Functional

- URL shortening Service similar to TinyURL, or Bitly.
- A client (user) enters a long URL into the system and the system returns a shortened URL.
- The client visiting the short URL must be redirected to the original long URL.
- The short URL should be readable.
- The short URL should be non-predictable.
- Users can create custom url with character limit of 9 to 16.
- The client should be able to choose a custom short URL.
- The user registers an account.

### Non-Functional Requirements

- High Availability
- Low Latency
- High Scalability
- Durable
- Fault Tolerant

### Out of Scope

- The user sets the visibility of the short URL.
- The short URL should support analytics (not real-time) such as the number of redirections from the shortened URL.
- The client optionally defines the expiry time of the short URL.
- The short URL should be web-crawler friendly (SEO).
- The short URL should be collision-free.
- Multiple users entering the same long URL must receive the same short URL (1-to-1 mapping).
- Service should expose REST API’s so that it can be integrated with third party applications.

## Traffic and System Capacity

## Reference

1. https://systemdesign.one/url-shortening-system-design/
2. https://medium.com/@sandeep4.verma/system-design-scalable-url-shortener-service-like-tinyurl-106f30f23a82
3. https://www.designgurus.io/blog/url-shortening

## New concepts

**Encoding:** The process of converting data from one form to another to preserve the usability of data.

**Hashing:** A one-way summary of data that cannot be reversed and is used to validate the integrity of data.

**Bloom filter:** a memory-efficient probabilistic data structure to check whether an element is present in a set
