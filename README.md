# Optimized-Neural-Network-Based-Routing-Protocol-for-VANETs


This project explores the integration of Neural Networks (NNs) and Reinforcement Learning (RL) to enhance the performance of Vehicular Ad Hoc Networks (VANETs). The proposed hybrid routing protocol improves Packet Delivery Ratio (PDR), reduces latency, optimizes energy consumption, and adapts to real-time traffic conditions, making it a cornerstone for intelligent transportation systems.


## **Table of Contents**
1. [Introduction](#introduction)
2. [Features](#features)
3. [Dataset](#dataset)
4. [Implementation](#implementation)
5. [Results](#results)
6. [Visualization](#visualization)
7. [Usage](#usage)
8. [Future Directions](#future-directions)


## **Introduction**

Vehicular Ad Hoc Networks (VANETs) play a vital role in smart transportation, enabling real-time communication between vehicles (V2V) and infrastructure (V2I). Traditional routing protocols face challenges in dynamic environments, such as scalability and adaptability. 

The proposed hybrid routing protocol integrates Neural Networks and Reinforcement Learning to dynamically adapt to changing traffic patterns and optimize routing decisions.


## **Features**
- **Hybrid Routing Protocol**:
  Combines proactive and reactive strategies for efficient communication.
- **Neural Network Integration**:
  Predicts optimal routes based on real-time traffic metrics.
- **Reinforcement Learning**:
  Adjusts predictions dynamically to optimize routing under changing conditions.
- **Performance Metrics**:
  Includes Packet Delivery Ratio (PDR), latency, routing overhead, and energy efficiency.
- **Visualization Tools**:
  Generates graphs for performance metrics, topology, and protocol distributions.


## **Dataset**
The project uses two datasets:
1. **PDR vs Time Dataset**:
   - Metrics: Packet Delivery Ratio (PDR), Time (s).
2. **Vehicle Routing Dataset**:
   - Metrics: Vehicle density, route distance, source/destination locations.

Datasets are preprocessed to generate features like:
- Time
- PDR
- Vehicle density
- Average speed
- Network congestion
- Route metrics (distance and hops)


## **Implementation**
The implementation involves:
1. **Data Preparation**:
   - Preprocessed datasets with enhanced features.
2. **Neural Network Design**:
   - Multi-Layer Perceptron (MLP) with ReLU and Softmax activation.
   - Dropout layers to prevent overfitting.
3. **Reinforcement Learning**:
   - Q-learning for dynamic adjustment based on network feedback.
4. **Simulation**:
   - SUMO and OMNeT++ used for realistic traffic and network simulations.

## **Results**
The hybrid routing protocol demonstrated:
- **92% Packet Delivery Ratio (PDR)**: Outperforming traditional protocols like AODV and GPSR.
- **20% Reduction in Latency**: Ensuring faster communication.
- **15% Decrease in Routing Overhead**: Optimizing resource usage.
- **18% Improvement in Energy Efficiency**: Prolonging network sustainability.


## **Visualization**
The project includes visual representations:
1. **Network Topology**:
   Displays node connectivity and routes.
2. **Training Accuracy**:
   Tracks neural network performance over epochs.
3. **Protocol Distribution**:
   Highlights routing protocol usage (Hybrid, Geographical, Topology-Based).
4. **Performance Comparison**:
   Compares key metrics between proposed and traditional protocols.

## **Usage**
1. **Clone the Repository**:
   ```bash
   git clone https://github.com/your-username/vanet-hybrid-routing.git
   cd vanet-hybrid-routing
2. **Install Dependencies**:
   ```bash
   pip install -r requirements.txt
3. **Run the Project**:
   ```bash
   python main.py

## **Future Directions**
1. Federated Learning: Privacy-preserving model training for VANETs.
2. Enhanced Security: Adversarial training to counter cyber threats.
3. Advanced Energy Management: Integrating renewable energy solutions.
