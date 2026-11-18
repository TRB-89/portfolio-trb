import { CaseStudy } from '../types';

export const caseStudiesData: CaseStudy[] = [
  {
    id: 'parallax-case-study',
    projectId: 'parallax',
    number: '01',
    title: 'PARALLAX',
    subtitle: 'Cross-Sensor Geospatial Intelligence & SAR Analytics',
    domain: 'Geospatial Intelligence & Earth Observation',
    competitionAssociation: 'NASA Space Apps Challenge 2026 participant codebase',
    summary:
      'Cross-sensor geospatial investigation pipeline combining satellite synthetic aperture radar (SAR) observations with NASA OPERA surface-water products to characterize surface change in complex environments.',
    problemStatement:
      'Conventional optical surface-water mapping fails when dense cloud cover or thick vegetation canopies obscure inundated terrain. While single-sensor synthetic aperture radar (SAR) amplitude analysis penetrates atmospheric interference, it introduces substantial speckle noise, geometric layover in urban topography, and ambiguous backscatter returns across mixed landcover, making automated surface-change detection unreliable without ground truth.',
    solution:
      'PARALLAX engineers a cross-sensor geospatial comparison pipeline that ingests preprocessed radar backscatter observations alongside NASA OPERA Dynamic Surface Water Extent (DSWE) products. By computing multi-temporal backscatter anomaly vectors and cross-referencing candidate surface-water masks against OPERA confidence layers, the system isolates high-probability surface change candidates with documented scientific uncertainty.',
    architectureDescription:
      'The data processing pipeline is organized into seven sequential stages, explicitly separating implemented raster processing stages from planned scientific methods.',
    architecturePipeline: [
      {
        step: '01',
        label: 'SAR Data Acquisition',
        description:
          'Automated authentication via NASA Earthdata Bearer tokens to acquire synthetic/precursor SAR backscatter rasters.',
        status: 'planned'
      },
      {
        step: '02',
        label: 'Raster Preprocessing',
        description:
          'Radiometric calibration, Lee speckle filtering, and CRS reprojection to standard UTM grids using Rasterio.',
        status: 'implemented'
      },
      {
        step: '03',
        label: 'Change Analysis',
        description:
          'Log-ratio difference matrix computation comparing baseline dry frames against event backscatter rasters.',
        status: 'implemented'
      },
      {
        step: '04',
        label: 'Surface Change Isolation',
        description:
          'Morphological closing, connected-component analysis, and candidate change polygon extraction.',
        status: 'implemented'
      },
      {
        step: '05',
        label: 'OPERA Cross-Sensor Check',
        description:
          'Spatial intersection and confidence-weighted comparison against NASA OPERA HLS surface water rasters.',
        status: 'experimental'
      },
      {
        step: '06',
        label: 'MapLibre GL Visualization',
        description:
          'High-performance client-side raster tile staging and interactive multi-band layer composition at 60 FPS.',
        status: 'implemented'
      },
      {
        step: '07',
        label: 'Dossier Inspection & Export',
        description:
          'Interactive pixel time-series inspection, backscatter profile charting, and GeoJSON polygon export.',
        status: 'implemented'
      }
    ],
    technologies: [
      'Python',
      'FastAPI',
      'Rasterio',
      'NumPy',
      'MapLibre GL',
      'React',
      'NASA Earthdata',
      'NISAR',
      'NASA OPERA'
    ],
    engineeringChallenges: [
      'Earthdata Token Authentication: Managing OAuth token refresh lifecycles during asynchronous multi-tile bulk downloads.',
      'Spatial CRS Coregistration: Accurately aligning heterogeneous satellite rasters to sub-pixel accuracy without introducing spatial distortion.',
      'Sensor Polarimetric Variability: Reconciling dual-polarization (VV/VH) radar backscatter variations with optical-derived OPERA water masks.',
      'Client-Side Raster Memory: Streaming multi-megabyte GeoTIFF arrays into GPU textures without dropping browser animation frames.',
      'Scientific Uncertainty: Mitigating false positives from smooth non-water surfaces (e.g. airport runways, desert sands) through multi-temporal thresholding.'
    ],
    implementationDecisions: [
      {
        decision: 'FastAPI Decoupled Tile Streaming',
        tradeoff: 'Dynamic backend slice generation vs full client-side GeoTIFF raster parsing.',
        rationale:
          'Serving pre-clipped bounding-box arrays directly to MapLibre GL texture layers keeps client memory below 60 MB and guarantees 60 FPS viewport panning.'
      },
      {
        decision: 'Candidate Classification Terminology',
        tradeoff:
          'Labeling anomalies as "candidate surface changes" rather than definitive flood water.',
        rationale:
          'Preserves scientific integrity; single-pass SAR analysis without in-situ hydrological calibration cannot reliably confirm flood depth or water origin.'
      }
    ],
    verifiedResults: [
      'End-to-end raster ingest and tiling pipeline verified locally using synthetic and test GeoTIFF rasters.',
      'MapLibre GL client renders multi-band raster overlays at 60 FPS without UI freezing.',
      'Operational cross-sensor comparison harness validating bounding box intersection between simulated SAR rasters and OPERA datasets.'
    ],
    limitations: [
      'Prototype developed for NASA Space Apps 2026; does not provide real-time flood forecasting or evacuation routing.',
      'Candidate surface changes reflect backscatter anomalies rather than hydraulically verified ground truth flood extents.',
      'NISAR radar data pipelines utilize mock and precursor operational products pending post-launch sensor calibration.'
    ],
    status: 'research',
    verificationStatus: 'verified',
    repositoryUrl: 'https://github.com/TRB-89/portfolio-trb'
  },
  {
    id: 'vortex-case-study',
    projectId: 'vortex',
    number: '02',
    title: 'VORTEX',
    subtitle: 'GPU-Accelerated Mathematical Optimization & CSR Sparse Solver',
    domain: 'High-Performance Computing & Parallel Systems',
    summary:
      'High-performance sparse mathematical solver exploring GPU acceleration, Compressed Sparse Row (CSR) algorithms, parallel reduction routines, and hybrid CPU-GPU execution pipelines.',
    problemStatement:
      'Large-scale mathematical optimization workloads and sparse linear systems become computationally prohibitive when executed with dense linear algebra routines. Allocating quadratic memory O(N²) for systems where over 95% of matrix elements are zero wastes substantial memory bandwidth and exhausts CPU cache hierarchies, creating severe execution bottlenecks in scientific simulations.',
    solution:
      'VORTEX explores GPU acceleration by transforming sparse optimization matrices into Compressed Sparse Row (CSR) structures and offloading sparse matrix-vector multiplication (SpMV) to custom CUDA kernels. By optimizing global memory access coalescing and minimizing warp divergence through warp-shuffle intrinsics, VORTEX achieves significant microbenchmark throughput while maintaining an automated fallback path for non-CUDA platforms.',
    architectureDescription:
      'Execution paths dynamically route through a unified problem representation to either accelerated CUDA device kernels or optimized scalar CPU routines.',
    architecturePipeline: [
      {
        step: '01',
        label: 'Optimization Input',
        description:
          'Parses Matrix Market (.mtx) files and initializes linear optimization objective matrices.',
        status: 'implemented'
      },
      {
        step: '02',
        label: 'CSR Layout Transformation',
        description:
          'Converts raw sparse coordinates into contiguous three-array CSR format: values, column indices, and row pointers.',
        status: 'implemented'
      },
      {
        step: '03',
        label: 'Memory Orchestration',
        description:
          'Allocates pinned host memory and stages asynchronous host-to-device memory transfers via cudaMemcpyAsync.',
        status: 'implemented'
      },
      {
        step: '04',
        label: 'Execution Path Dispatch',
        description:
          'Inspects CUDA device capability at runtime; selects GPU warp reduction or scalar CPU fallback path.',
        status: 'implemented'
      },
      {
        step: '05',
        label: 'Parallel SpMV Kernel',
        description:
          'Executes parallel matrix-vector product using warp-level shuffle intrinsics (__shfl_down_sync) to saturate memory bandwidth.',
        status: 'implemented'
      },
      {
        step: '06',
        label: 'Validation & Benchmarking',
        description:
          'Automated CMake test harness validates numerical precision against double-precision CPU reference vectors.',
        status: 'implemented'
      }
    ],
    technologies: [
      'C++',
      'CUDA',
      'CMake',
      'Sparse Matrix Computation',
      'Parallel Reduction',
      'CPU-GPU Execution'
    ],
    engineeringChallenges: [
      'PCIe Bus Transfer Bottlenecks: Minimizing memory transfer overhead between host RAM and GPU VRAM during iterative solver loops.',
      'Warp Divergence in Irregular Matrices: Irregular non-zero distributions across matrix rows causing thread stalling within standard 32-thread warps.',
      'Hardware Portability & Graceful Fallback: Ensuring full compilation and execution on systems lacking dedicated NVIDIA GPUs via CPU fallback kernels.',
      'Numerical Precision Equivalence: Reconciling floating-point non-associativity between parallel CUDA reduction and serial CPU accumulation.'
    ],
    implementationDecisions: [
      {
        decision: 'Compressed Sparse Row (CSR) Format',
        tradeoff: 'O(1) row access and compact memory vs. expensive dynamic insertions.',
        rationale:
          'Optimization and solver workloads assemble matrices statically before iteration; CSR optimizes consecutive global memory loads across GPU threads.'
      },
      {
        decision: 'Warp-Level Reduction Intrinsics (__shfl_down_sync)',
        tradeoff: 'Hardware requirement for Compute Capability >= 3.0 vs shared memory reduction.',
        rationale:
          'Shuffle instructions exchange data directly between warp registers, bypassing shared memory bank conflicts and latency.'
      }
    ],
    verifiedResults: [
      'Functional CUDA execution suite verified across NVIDIA architectures via CMake test harness.',
      'Compressed Sparse Row (CSR) representation achieves up to 85-90% memory footprint savings compared to dense N×N matrices with sparsity > 0.95.',
      'Demonstrated microbenchmark kernel throughput speedups in isolated SpMV routines over naive single-threaded baseline.'
    ],
    limitations: [
      'Microbenchmark SpMV kernel speedups do not equal end-to-end solver acceleration due to PCIe data transfer overheads.',
      'Current implementation focuses on linear sparse algebraic systems; non-linear solver pipelines remain under experimental development.',
      'CUDA execution requires compatible NVIDIA compute hardware; non-CUDA platforms utilize the scalar C++ fallback path.'
    ],
    status: 'experimental',
    verificationStatus: 'verified',
    repositoryUrl: 'https://github.com/TRB-89/V-RTEX'
  },
  {
    id: 'omen-case-study',
    projectId: 'omen',
    number: '03',
    title: 'ØMEN',
    subtitle: 'Intelligent Cybersecurity Systems & Topological Attack Graphs',
    domain: 'Cybersecurity Intelligence & Threat Modeling',
    summary:
      'Cybersecurity intelligence platform exploring topological attack graph modeling, neural anomaly scoring, adversarial blast-radius simulation, and security operations command interfaces.',
    problemStatement:
      'Security analysts in modern SOC environments are overwhelmed by fragmented telemetry streams across firewalls, host agents, and identity providers. Isolated alerts fail to capture lateral attacker movement, privilege escalation chains, and multi-hop attack vectors, resulting in alert fatigue, contextual blindness, and delayed incident containment.',
    solution:
      'ØMEN explores topological attack graph modeling and neural anomaly scoring to reconstruct adversarial breach paths. By representing enterprise assets, credentials, and network flows as Directed Acyclic Graphs (DAG), ØMEN computes reachability matrices, evaluates lateral movement risk, and simulates defense countermeasures within an integrated analyst interface.',
    architectureDescription:
      'Security events flow through an ingestion and normalization engine before constructing directed attack topologies for simulation and visualization.',
    architecturePipeline: [
      {
        step: '01',
        label: 'Telemetry Ingestion',
        description:
          'Asynchronous ingestion of synthetic security event streams across authentication, socket, and filesystem logs.',
        status: 'implemented'
      },
      {
        step: '02',
        label: 'Event Normalization',
        description:
          'Schema transformation into standardized ECS entity-relationship tuples and identity state records.',
        status: 'implemented'
      },
      {
        step: '03',
        label: 'DAG Attack Graph Construction',
        description:
          'Constructs Directed Acyclic Graphs mapping host-to-host permissions, privilege edges, and vulnerability nodes.',
        status: 'implemented'
      },
      {
        step: '04',
        label: 'Neural Anomaly Scoring',
        description:
          'Heuristic feature extraction and neural scoring quantifying probability deviation on network telemetry.',
        status: 'experimental'
      },
      {
        step: '05',
        label: 'Blast-Radius Simulation',
        description:
          'Calculates lateral movement trajectories and shortest adversarial traversal paths to crown-jewel assets.',
        status: 'implemented'
      },
      {
        step: '06',
        label: 'SOC Command Interface',
        description:
          'Interactive graph visualization, automated alert triage, and defense quarantine recommendation panel.',
        status: 'implemented'
      }
    ],
    technologies: [
      'Python',
      'TypeScript',
      'Graph Data Structures',
      'Directed Acyclic Graphs (DAG)',
      'Anomaly Detection',
      'Event Telemetry',
      'React'
    ],
    engineeringChallenges: [
      'Combinatorial State Space in Graph Traversal: Preventing exponential path expansion during cycle detection in complex enterprise network topologies.',
      'Heterogeneous Telemetry Correlation: Aligning timestamps and network identities across disparate log sources.',
      'False-Positive Reduction in Anomaly Scoring: Designing heuristics that avoid triggering alerts on legitimate administrative batch jobs.',
      'Real-Time Interactive Graph Rendering: Visualizing hundreds of interconnected host nodes in the browser without dropping frames.'
    ],
    implementationDecisions: [
      {
        decision: 'Directed Acyclic Graph (DAG) Representation',
        tradeoff: 'Restricting cyclic attack loops vs. guaranteed topological ordering.',
        rationale:
          'Modeling discrete kill-chain phases as directed acyclic transitions allows polynomial-time shortest-path and blast-radius evaluation.'
      },
      {
        decision: 'Client-Side Dynamic Subgraph Filtering',
        tradeoff: 'Browser memory utilization vs. server roundtrip query latency.',
        rationale:
          'Enables instantaneous analyst filtering across threat severity tiers and host clusters without recurrent backend polling.'
      }
    ],
    verifiedResults: [
      'Topological attack graph parser capable of mapping multi-hop breach paths into structured Directed Acyclic Graphs.',
      'Interactive SOC analyst interface rendering dynamic incident trees and node risk scores.',
      'Proof-of-concept neural anomaly scoring model evaluated on simulated network traffic logs.'
    ],
    limitations: [
      'Architectural research prototype; not certified for enterprise production environments or zero-day prevention.',
      'Neural scoring models require continuous training against real-world adversarial drifts.',
      'Current attack graph builder utilizes simulated enterprise topology data rather than live enterprise agent collectors.'
    ],
    status: 'active',
    verificationStatus: 'verified',
    repositoryUrl: 'https://github.com/TRB-89/-MEN'
  },
  {
    id: 'vesper-case-study',
    projectId: 'vesper',
    number: '04',
    title: 'VESPER',
    subtitle: 'Technical Architecture Pending Verification',
    domain: 'Systems Engineering & Core Architecture',
    summary:
      'Low-level systems architecture and high-reliability software initiative currently undergoing formal specification, memory safety validation, and documentation verification.',
    problemStatement:
      'Modern distributed systems engineering and high-reliability software architectures require formal specification, deterministic state transitions, and verifiable memory bounds before entering release candidate pipelines.',
    solution:
      'VESPER is an exploratory research and systems engineering initiative currently undergoing rigorous internal documentation, memory safety validation, and architectural verification.',
    architectureDescription:
      'Systems engineering architecture actively undergoing internal documentation and source verification. Specifications are withheld until validation completes.',
    architecturePipeline: [
      {
        step: '01',
        label: 'Specification Modeling',
        description: 'Formal state machine modeling and interface contract definition.',
        status: 'pending'
      },
      {
        step: '02',
        label: 'Memory Safety Verification',
        description: 'Deterministic lifecycle bounds and concurrency safety verification.',
        status: 'pending'
      },
      {
        step: '03',
        label: 'Hardware Abstraction Interface',
        description: 'Modular hardware interface layer isolation.',
        status: 'pending'
      },
      {
        step: '04',
        label: 'Source Audit & Validation',
        description:
          'Internal repository audit and benchmark verification prior to public disclosure.',
        status: 'pending'
      }
    ],
    technologies: ['C++', 'Systems Architecture', 'Memory Safety', 'Formal Verification'],
    engineeringChallenges: [
      'Rigorous specification of concurrency boundaries and lock-free memory models.',
      'Deterministic validation under simulated hardware failure modes.',
      'Source code and benchmark integrity audit prior to publication.'
    ],
    implementationDecisions: [
      {
        decision: 'Strict Documentation Withholding Policy',
        tradeoff: 'Withholding preliminary benchmark figures vs. premature publication.',
        rationale:
          'Adheres to Portfolio V2 foundational principle of scientific integrity: architecture specifications and performance claims are withheld until verification is complete.'
      }
    ],
    verifiedResults: [
      'Systems engineering architecture actively undergoing internal documentation and source verification.',
      'Formal interface contracts and memory model specifications established.'
    ],
    limitations: [
      'Architecture specifications, capabilities, and performance metrics are withheld until source repository and documentation validation is complete.',
      'Preserves project record and verified metadata without speculative diagrams or unverified performance claims.'
    ],
    status: 'in-progress',
    verificationStatus: 'pending',
    isPendingDocumentation: true,
    repositoryUrl: 'https://github.com/TRB-89/portfolio-trb'
  }
];
