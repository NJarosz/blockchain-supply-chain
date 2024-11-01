/**
 * This file is autogenerated by Scaffold-ETH.
 * You should not edit it manually or your changes might be overwritten.
 */
import { GenericContractsDeclaration } from "~~/utils/scaffold-eth/contract";

const deployedContracts = {
  31337: {
    ProductRegistration: {
      address: "0x9A9f2CCfdE556A7E9Ff0848998Aa4a0CFD8863AE",
      abi: [
        {
          inputs: [
            {
              internalType: "address",
              name: "_addr",
              type: "address",
            },
          ],
          stateMutability: "nonpayable",
          type: "constructor",
        },
        {
          inputs: [],
          name: "ReentrancyGuardReentrantCall",
          type: "error",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: false,
              internalType: "uint256",
              name: "id",
              type: "uint256",
            },
            {
              indexed: false,
              internalType: "address",
              name: "newOwner",
              type: "address",
            },
          ],
          name: "OwnershipTransferred",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: false,
              internalType: "uint256",
              name: "id",
              type: "uint256",
            },
            {
              indexed: false,
              internalType: "string",
              name: "name",
              type: "string",
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "origin",
              type: "uint256",
            },
            {
              indexed: false,
              internalType: "address",
              name: "owner",
              type: "address",
            },
          ],
          name: "ProductRegistered",
          type: "event",
        },
        {
          inputs: [],
          name: "STATE_CONTRACT",
          outputs: [
            {
              internalType: "address",
              name: "",
              type: "address",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "id",
              type: "uint256",
            },
          ],
          name: "getProduct",
          outputs: [
            {
              components: [
                {
                  internalType: "uint256",
                  name: "id",
                  type: "uint256",
                },
                {
                  internalType: "bytes24",
                  name: "hashedRfid",
                  type: "bytes24",
                },
                {
                  internalType: "string",
                  name: "name",
                  type: "string",
                },
                {
                  internalType: "uint256",
                  name: "origin",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "timestamp",
                  type: "uint256",
                },
                {
                  internalType: "address",
                  name: "owner",
                  type: "address",
                },
              ],
              internalType: "struct ProductRegistration.Product",
              name: "",
              type: "tuple",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          name: "products",
          outputs: [
            {
              internalType: "uint256",
              name: "id",
              type: "uint256",
            },
            {
              internalType: "bytes24",
              name: "hashedRfid",
              type: "bytes24",
            },
            {
              internalType: "string",
              name: "name",
              type: "string",
            },
            {
              internalType: "uint256",
              name: "origin",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "timestamp",
              type: "uint256",
            },
            {
              internalType: "address",
              name: "owner",
              type: "address",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "id",
              type: "uint256",
            },
            {
              internalType: "bytes24",
              name: "rfid",
              type: "bytes24",
            },
            {
              internalType: "string",
              name: "name",
              type: "string",
            },
            {
              internalType: "uint256",
              name: "origin",
              type: "uint256",
            },
          ],
          name: "registerProduct",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "id",
              type: "uint256",
            },
            {
              internalType: "string",
              name: "password",
              type: "string",
            },
            {
              internalType: "address",
              name: "newOwner",
              type: "address",
            },
          ],
          name: "transferOwnership",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
      ],
      inheritedFunctions: {},
    },
    StateTransition: {
      address: "0x959922bE3CAee4b8Cd9a407cc3ac1C251C2007B1",
      abi: [
        {
          inputs: [
            {
              internalType: "string[]",
              name: "nodes",
              type: "string[]",
            },
          ],
          stateMutability: "nonpayable",
          type: "constructor",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: false,
              internalType: "uint256",
              name: "id",
              type: "uint256",
            },
            {
              indexed: false,
              internalType: "enum StateTransition.State",
              name: "newState",
              type: "uint8",
            },
            {
              indexed: false,
              internalType: "string",
              name: "location",
              type: "string",
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "timestamp",
              type: "uint256",
            },
          ],
          name: "ProductStateUpdated",
          type: "event",
        },
        {
          inputs: [],
          name: "fetchNodes",
          outputs: [
            {
              internalType: "uint256[]",
              name: "ids",
              type: "uint256[]",
            },
            {
              internalType: "string[]",
              name: "nodes",
              type: "string[]",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "id",
              type: "uint256",
            },
          ],
          name: "getState",
          outputs: [
            {
              components: [
                {
                  internalType: "uint256",
                  name: "id",
                  type: "uint256",
                },
                {
                  internalType: "bytes24",
                  name: "hashedRfid",
                  type: "bytes24",
                },
                {
                  internalType: "enum StateTransition.State",
                  name: "state",
                  type: "uint8",
                },
                {
                  internalType: "string",
                  name: "location",
                  type: "string",
                },
                {
                  internalType: "uint256",
                  name: "timestamp",
                  type: "uint256",
                },
              ],
              internalType: "struct StateTransition.ProductState",
              name: "",
              type: "tuple",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "nodeCount",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          name: "productStates",
          outputs: [
            {
              internalType: "uint256",
              name: "id",
              type: "uint256",
            },
            {
              internalType: "bytes24",
              name: "hashedRfid",
              type: "bytes24",
            },
            {
              internalType: "enum StateTransition.State",
              name: "state",
              type: "uint8",
            },
            {
              internalType: "string",
              name: "location",
              type: "string",
            },
            {
              internalType: "uint256",
              name: "timestamp",
              type: "uint256",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          name: "supplyChainNodes",
          outputs: [
            {
              internalType: "string",
              name: "",
              type: "string",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "id",
              type: "uint256",
            },
            {
              internalType: "bytes24",
              name: "rfid",
              type: "bytes24",
            },
            {
              internalType: "enum StateTransition.State",
              name: "newState",
              type: "uint8",
            },
            {
              internalType: "uint256",
              name: "location",
              type: "uint256",
            },
          ],
          name: "updateState",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
      ],
      inheritedFunctions: {},
    },
  },
  11155111: {
    ProductRegistration: {
      address: "0xCd8b4906d1E47551B5F3302c8be3c096F0c9c085",
      abi: [
        {
          inputs: [
            {
              internalType: "address",
              name: "_addr",
              type: "address",
            },
          ],
          stateMutability: "nonpayable",
          type: "constructor",
        },
        {
          inputs: [],
          name: "ReentrancyGuardReentrantCall",
          type: "error",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: false,
              internalType: "uint256",
              name: "id",
              type: "uint256",
            },
            {
              indexed: false,
              internalType: "address",
              name: "newOwner",
              type: "address",
            },
          ],
          name: "OwnershipTransferred",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: false,
              internalType: "uint256",
              name: "id",
              type: "uint256",
            },
            {
              indexed: false,
              internalType: "string",
              name: "name",
              type: "string",
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "origin",
              type: "uint256",
            },
            {
              indexed: false,
              internalType: "address",
              name: "owner",
              type: "address",
            },
          ],
          name: "ProductRegistered",
          type: "event",
        },
        {
          inputs: [],
          name: "STATE_CONTRACT",
          outputs: [
            {
              internalType: "address",
              name: "",
              type: "address",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "id",
              type: "uint256",
            },
          ],
          name: "getProduct",
          outputs: [
            {
              components: [
                {
                  internalType: "uint256",
                  name: "id",
                  type: "uint256",
                },
                {
                  internalType: "bytes24",
                  name: "hashedRfid",
                  type: "bytes24",
                },
                {
                  internalType: "string",
                  name: "name",
                  type: "string",
                },
                {
                  internalType: "uint256",
                  name: "origin",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "timestamp",
                  type: "uint256",
                },
                {
                  internalType: "address",
                  name: "owner",
                  type: "address",
                },
              ],
              internalType: "struct ProductRegistration.Product",
              name: "",
              type: "tuple",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          name: "products",
          outputs: [
            {
              internalType: "uint256",
              name: "id",
              type: "uint256",
            },
            {
              internalType: "bytes24",
              name: "hashedRfid",
              type: "bytes24",
            },
            {
              internalType: "string",
              name: "name",
              type: "string",
            },
            {
              internalType: "uint256",
              name: "origin",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "timestamp",
              type: "uint256",
            },
            {
              internalType: "address",
              name: "owner",
              type: "address",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "id",
              type: "uint256",
            },
            {
              internalType: "bytes24",
              name: "rfid",
              type: "bytes24",
            },
            {
              internalType: "string",
              name: "name",
              type: "string",
            },
            {
              internalType: "uint256",
              name: "origin",
              type: "uint256",
            },
          ],
          name: "registerProduct",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "id",
              type: "uint256",
            },
            {
              internalType: "string",
              name: "password",
              type: "string",
            },
            {
              internalType: "address",
              name: "newOwner",
              type: "address",
            },
          ],
          name: "transferOwnership",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
      ],
      inheritedFunctions: {},
    },
    StateTransition: {
      address: "0xe8Bb1819783B7C7372b51A14C7d8ACa6EcA79541",
      abi: [
        {
          inputs: [
            {
              internalType: "string[]",
              name: "nodes",
              type: "string[]",
            },
          ],
          stateMutability: "nonpayable",
          type: "constructor",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: false,
              internalType: "uint256",
              name: "id",
              type: "uint256",
            },
            {
              indexed: false,
              internalType: "enum StateTransition.State",
              name: "newState",
              type: "uint8",
            },
            {
              indexed: false,
              internalType: "string",
              name: "location",
              type: "string",
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "timestamp",
              type: "uint256",
            },
          ],
          name: "ProductStateUpdated",
          type: "event",
        },
        {
          inputs: [],
          name: "fetchNodes",
          outputs: [
            {
              internalType: "uint256[]",
              name: "ids",
              type: "uint256[]",
            },
            {
              internalType: "string[]",
              name: "nodes",
              type: "string[]",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "id",
              type: "uint256",
            },
          ],
          name: "getState",
          outputs: [
            {
              components: [
                {
                  internalType: "uint256",
                  name: "id",
                  type: "uint256",
                },
                {
                  internalType: "bytes24",
                  name: "hashedRfid",
                  type: "bytes24",
                },
                {
                  internalType: "enum StateTransition.State",
                  name: "state",
                  type: "uint8",
                },
                {
                  internalType: "string",
                  name: "location",
                  type: "string",
                },
                {
                  internalType: "uint256",
                  name: "timestamp",
                  type: "uint256",
                },
              ],
              internalType: "struct StateTransition.ProductState",
              name: "",
              type: "tuple",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "nodeCount",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          name: "productStates",
          outputs: [
            {
              internalType: "uint256",
              name: "id",
              type: "uint256",
            },
            {
              internalType: "bytes24",
              name: "hashedRfid",
              type: "bytes24",
            },
            {
              internalType: "enum StateTransition.State",
              name: "state",
              type: "uint8",
            },
            {
              internalType: "string",
              name: "location",
              type: "string",
            },
            {
              internalType: "uint256",
              name: "timestamp",
              type: "uint256",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          name: "supplyChainNodes",
          outputs: [
            {
              internalType: "string",
              name: "",
              type: "string",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "id",
              type: "uint256",
            },
            {
              internalType: "bytes24",
              name: "rfid",
              type: "bytes24",
            },
            {
              internalType: "enum StateTransition.State",
              name: "newState",
              type: "uint8",
            },
            {
              internalType: "uint256",
              name: "location",
              type: "uint256",
            },
          ],
          name: "updateState",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
      ],
      inheritedFunctions: {},
    },
  },
} as const;

export default deployedContracts satisfies GenericContractsDeclaration;
