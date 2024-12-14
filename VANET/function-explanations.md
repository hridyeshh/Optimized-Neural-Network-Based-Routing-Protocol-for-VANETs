## Function Explanations

1. `load_datasets()`
   - Purpose: Load the PDR and routing datasets from Google Drive
   - Reads CSV files using Pandas `read_csv()` function
   - Returns the loaded DataFrames `pdr_data` and `routing_data`
   - Raises an exception if loading fails, with error details

2. `create_network_graph(routing_data)`
   - Purpose: Create a NetworkX graph from the routing dataset
   - Extracts unique locations and their notations from the routing data
   - Adds nodes to the graph with location attributes
   - Adds edges between nodes with distances as edge weights
   - Returns the constructed NetworkX graph `G`

3. `generate_enhanced_features(pdr_data, routing_data, n_samples)`
   - Purpose: Generate an enhanced dataset by combining PDR and routing data
   - Creates a base dataset with randomly sampled PDR, time, and other metrics
   - Calculates route distances and hops using NetworkX shortest path functions
   - Assigns optimal protocols based on conditions using `np.select()`
   - Performs data validation checks
   - Returns the enhanced DataFrame `df`

4. `VANETRoutingSystem` class:
   - `build_model(input_shape)`
     - Purpose: Define the neural network architecture
     - Creates a sequential model with Dense and Dropout layers
     - Compiles the model with Adam optimizer, sparse categorical cross-entropy loss, and accuracy metric
   - `prepare_data(data)`
     - Purpose: Prepare the dataset for training
     - Encodes protocol labels using a dictionary mapping
     - One-hot encodes source and destination locations
     - Selects numerical features
     - Combines numerical and encoded features into a single DataFrame
     - Returns feature matrix `X` and target vector `y`
   - `train(data, epochs, batch_size)`
     - Purpose: Train the neural network model
     - Prepares the data using `prepare_data()`
     - Splits the data into training and testing sets
     - Scales the features using `StandardScaler`
     - Builds the model architecture using `build_model()`
     - Trains the model using `fit()` with specified epochs and batch size
     - Evaluates the trained model on test data
     - Returns training history and test data
   - `predict_protocol(features)`
     - Purpose: Predict optimal protocol for given input features
     - Prepares the input features using `prepare_data()`
     - Scales the features using the pre-fitted scaler
     - Makes predictions using the trained model
     - Maps the predicted class indices back to protocol names
     - Returns the predicted protocols as a list

5. `main()`
   - Purpose: Execute the main flow of the program
   - Loads the datasets using `load_datasets()`
   - Generates enhanced features using `generate_enhanced_features()`
   - Initializes the `VANETRoutingSystem`
   - Trains the model using `train()`
   - Creates visualizations of training history, network topology, protocol distribution, and feature relationships
   - Tests the model with sample scenarios and visualizes the predictions
   - Prints detailed prediction results for each test scenario
