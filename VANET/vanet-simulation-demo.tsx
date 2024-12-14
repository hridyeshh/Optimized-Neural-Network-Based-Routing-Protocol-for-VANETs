import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

export default function VANETSimulation() {
  const [isSimulationRunning, setIsSimulationRunning] = useState(false);
  const [vehicleDensity, setVehicleDensity] = useState(0.5);
  const [networkCongestion, setNetworkCongestion] = useState(0.3);
  const [vehicles, setVehicles] = useState([]);
  const [pdrData, setPdrData] = useState([]);
  const [selectedProtocol, setSelectedProtocol] = useState('hybrid');

  useEffect(() => {
    if (isSimulationRunning) {
      const interval = setInterval(() => {
        // Update PDR data
        setPdrData(prev => {
          const newData = [...prev, {
            time: prev.length,
            pdr: 0.8 + Math.random() * 0.2,
            protocol: selectedProtocol
          }].slice(-20);
          return newData;
        });

        // Update vehicle positions
        setVehicles(generateVehicles());
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [isSimulationRunning, vehicleDensity, selectedProtocol]);

  const generateVehicles = () => {
    const numVehicles = Math.floor(vehicleDensity * 20);
    return Array(numVehicles).fill(0).map((_, i) => ({
      id: i,
      x: Math.random() * 580 + 10,
      y: Math.random() * 380 + 10,
      speed: Math.random() * 5 + 2,
      direction: Math.random() * Math.PI * 2,
      protocol: selectedProtocol
    }));
  };

  const getProtocolColor = (protocol) => {
    switch(protocol) {
      case 'topology_based': return "#ff6b6b";
      case 'geographical': return "#4ecdc4";
      case 'hybrid': return "#feca57";
      default: return "#4ecdc4";
    }
  };

  return (
    <div className="container mx-auto p-4">
      <Card className="mb-4">
        <CardHeader>
          <CardTitle>VANET Protocol Simulation</CardTitle>
        </CardHeader>
        <CardContent>
          {/* Simulation Controls */}
          <div className="mb-4 space-y-4">
            <div>
              <label className="block mb-2">Vehicle Density</label>
              <Slider
                value={[vehicleDensity * 100]}
                max={100}
                step={1}
                onValueChange={(value) => setVehicleDensity(value[0]/100)}
              />
            </div>
            <div>
              <label className="block mb-2">Network Congestion</label>
              <Slider
                value={[networkCongestion * 100]}
                max={100}
                step={1}
                onValueChange={(value) => setNetworkCongestion(value[0]/100)}
              />
            </div>
            <div className="flex space-x-2">
              <Button
                onClick={() => setSelectedProtocol('topology_based')}
                variant={selectedProtocol === 'topology_based' ? 'default' : 'outline'}
              >
                Topology-based
              </Button>
              <Button
                onClick={() => setSelectedProtocol('geographical')}
                variant={selectedProtocol === 'geographical' ? 'default' : 'outline'}
              >
                Geographical
              </Button>
              <Button
                onClick={() => setSelectedProtocol('hybrid')}
                variant={selectedProtocol === 'hybrid' ? 'default' : 'outline'}
              >
                Hybrid
              </Button>
            </div>
            <Button
              onClick={() => setIsSimulationRunning(!isSimulationRunning)}
            >
              {isSimulationRunning ? 'Stop Simulation' : 'Start Simulation'}
            </Button>
          </div>

          {/* Simulation Visualization */}
          <div className="bg-gray-100 rounded-lg p-4 mb-4" style={{ height: '400px' }}>
            <svg width="100%" height="100%" viewBox="0 0 600 400">
              {vehicles.map((vehicle) => (
                <g key={vehicle.id}>
                  <motion.circle
                    cx={vehicle.x}
                    cy={vehicle.y}
                    r={8}
                    fill={getProtocolColor(vehicle.protocol)}
                    animate={{
                      cx: (vehicle.x + Math.cos(vehicle.direction) * vehicle.speed) % 600,
                      cy: (vehicle.y + Math.sin(vehicle.direction) * vehicle.speed) % 400
                    }}
                    transition={{ duration: 1, ease: "linear", repeat: Infinity }}
                  />
                </g>
              ))}
            </svg>
          </div>

          {/* Performance Metrics */}
          <Card>
            <CardHeader>
              <CardTitle>Network Performance</CardTitle>
            </CardHeader>
            <CardContent>
              <LineChart width={500} height={300} data={pdrData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="time" />
                <YAxis domain={[0, 1]} />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="pdr" stroke="#8884d8" name="PDR" />
              </LineChart>
            </CardContent>
          </Card>
        </CardContent>
      </Card>
    </div>
  );
}
