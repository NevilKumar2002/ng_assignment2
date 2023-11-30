Section C:
Question: 1. Write and share a small note about your choice of system to schedule periodic tasks (such as downloading list of ISINs every 24 hours). Why did you choose it? Is it reliable enough; Or will it scale? If not, what are the problems with it? And, what else would you recommend to fix this problem at scale in production?


Answer:
For scheduling periodic tasks, I would recommend using a reliable and scalable task scheduler like Celery in combination with a message broker such as RabbitMQ or Redis.

Choice: Celery with RabbitMQ/Redis

Reasons:

Reliability: Celery is a distributed task queue system that supports task scheduling and execution. It has proven reliability in handling asynchronous tasks in various production environments.

Scalability: Celery is designed to scale horizontally, making it suitable for handling a large number of periodic tasks. By deploying multiple worker nodes, you can distribute the workload and achieve high scalability.

Flexibility: Celery supports different message brokers, and RabbitMQ or Redis can be chosen based on specific requirements. RabbitMQ provides advanced features like message persistence and delivery guarantees, while Redis is known for its speed and simplicity.

Task Monitoring: Celery comes with built-in tools for monitoring and managing tasks. You can inspect the status of tasks, view logs, and handle task retries, making it easier to maintain and troubleshoot.

Concerns:
1.Complexity
2.Resource Utilization:
3.Recommendation for Production Scale:
4.For large-scale production, consider the following practices:
5.Load Balancing: 
6.Task Result Backend:
7.Monitoring and Logging: 
8.Rate Limiting: 
9.High Availability:

2 . Question:
Suppose you are building a financial planning tool - which requires us to fetch bank statements from the user. Now, we would like to encrypt the data - so that nobody - not even the developer can view it. What would you do to solve this problem?


answer:
To ensure the security and privacy of user data, especially sensitive financial information like bank statements, encryption is a crucial aspect. Here's a high-level overview of steps you can take to secure and encrypt user data in a financial planning tool:
1.Transport Layer Security (TLS):
Use HTTPS to secure the communication between the user's browser and your server. This ensures that data transmitted over the network is encrypted during transit.
End-to-End Encryption:

2.Implement end-to-end encryption for data at rest and in transit. This means that data is encrypted on the client-side and only decrypted on the server-side, ensuring that even if intercepted, the data remains unreadable.
Client-Side Encryption:

3.Utilize client-side encryption libraries or frameworks (e.g., Web Crypto API) to encrypt sensitive data on the user's device before sending it to your server. This ensures that the plaintext data never leaves the user's device.
Key Management:

4.Implement secure key management practices. Store encryption keys securely, preferably in a hardware security module (HSM) or a secure key management service. Regularly rotate encryption keys to enhance security.
Data Encryption Algorithm:

5.Choose strong, industry-standard encryption algorithms. AES (Advanced Encryption Standard) is commonly used for encrypting sensitive data. Ensure that you stay updated with best practices for encryption algorithms.
Secure Storage:

6.Encrypt data at rest on the server-side. Use encryption mechanisms provided by your database or storage system to protect user data stored on your servers.





