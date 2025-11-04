# DJ signal chain

Signal Chain: CDJ-3000X → DJM-750MK2 (RCA) → PA.

**CDJ-3000X**: AlphaTheta flagship DJ media player  
- ESS Technology DAC, 115 dB S/N ratio
- 96 kHz/32-bit internal processing
- Cloud connectivity and Wi-Fi capable

**DJM-750MK2**: Pioneer DJ 4-channel performance mixer  
- 32-bit ADC/DAC with 64-bit DSP
- 11 Beat FX + 4 Sound Color FX
- Send/Return loop capability
- rekordbox dj and dvs license included

## 1. CDJ-3000X Playback & Processing

- **Source**: WAV file stored on USB/SD card or streamed via cloud
- **Format Support**: Up to 24-bit/96kHz
- **Internal Processing**: 96 kHz/32-bit floating-point
- **Digital Processing**: 
  - Pitch control
  - Key shift  
  - Loops
  - Hot cues
  - Beat sync
  - All performance features

## 2. CDJ-3000X DAC (Digital-to-Analog Conversion)
### **Hardware**
- **DAC Chip**: ESS Technology (high-performance model)
- **Signal-to-Noise Ratio**: 115 dB
- **Total Harmonic Distortion**: 0.0018%
- **Frequency Response**: 4 Hz – 40 kHz

### **Power Supply**
- Newly designed power supply unit
- Reduces unwanted noise
- Enhances low-frequency power for punchy bass and warm tone

### **Output**
- **Connection Type**: Unbalanced RCA analog outputs (rear panel)
- **Output Level**: 2.0 Vrms (1 kHz, 0 dB)
- **Signal Type**: Analog stereo audio

## 3. Cable Connection
- **Cable Type**: RCA stereo cable
- **Signal**: Unbalanced analog audio
- **Destination**: DJM-750MK2 line inputs (channel 1-4)

## 4. DJM-750MK2 Input Stage
### **Analog-to-Digital Conversion**
- **ADC Chip**: 32-bit A/D converter
- **Purpose**: Converts incoming analog signal back to digital domain
- **Sample Rate**: 48 kHz (standard operating mode)
- **Resolution**: 32-bit

**Note**: Signal undergoes second conversion here (D→A at CDJ, then A→D at mixer)

## 5. DJM-750MK2 DSP Processing
### **Digital Signal Processor**
- **DSP Type**: 64-bit digital signal processor
- **Dithering**: Applied for optimal bit-depth conversion
- **Processing Power**: Handles all mixing and effects in real-time

### **Signal Path Through Mixer**
1. **Channel Strip Processing**:
   - TRIM control (input gain)
   - 3-band EQ (HIGH/MID/LOW)
     - Standard mode: +6dB to -26dB
     - Isolator mode: Total kill capability
   - Sound Color FX (if applied to channel)
   - Channel fader

2. **Master Bus Processing**:
   - Crossfader blending
   - Master level control
   - **Beat FX on Master** (when effects are applied to master output):
     - 11 Beat FX available (Delay, Echo, Ping Pong, Spiral, Reverb, Transform, Flanger, Pitch, Roll, Vinyl Brake, Helix)
     - FX Frequency control (isolate which frequencies are affected)
     - Beat multiplier/division
     - Level/depth control

## 6. DJM-750MK2 Output Stage
### **Digital-to-Analog Conversion**
- **DAC Chip**: 32-bit D/A converter
- **Sample Rate**: 48 kHz
- **Resolution**: 32-bit
- **Processing**: Dithering applied for optimal conversion

### **Master Output**
- **Connection Type**: Unbalanced RCA outputs (Master 2)
- **Alternative**: Balanced XLR outputs (Master 1) - but you specified RCA
- **Signal Type**: Analog stereo audio
- **Master Attenuator**: -12/-6/0 dB switch (factory default: 0 dB)

## 7. PA Connection
- **Cable Type**: RCA stereo cable
- **Destination**: PA system/powered speakers/amplifier inputs
- **Signal**: Final analog audio output with all processing applied

## Technical Summary

### Conversion Count
- **Total conversions in chain**: 3
  1. D→A: CDJ-3000X ESS DAC
  2. A→D: DJM-750MK2 32-bit ADC
  3. D→A: DJM-750MK2 32-bit DAC

### Signal Quality Specifications
| Stage | Bit Depth | Sample Rate | S/N Ratio | THD |
|-------|-----------|-------------|-----------|-----|
| CDJ-3000X Processing | 32-bit float | 96 kHz | - | - |
| CDJ-3000X DAC Output | - | - | 115 dB | 0.0018% |
| DJM-750MK2 ADC | 32-bit | 48 kHz | - | - |
| DJM-750MK2 DSP | 64-bit | 48 kHz | - | - |
| DJM-750MK2 DAC | 32-bit | 48 kHz | - | - |
| DJM-750MK2 Master Out | - | - | 105 dB | - |

### Key Points About Your Setup

1. **Using RCA Analog Connections**: The signal goes through additional D/A and A/D conversions compared to using digital coaxial connections between CDJ and mixer. This adds minimal latency but maintains compatibility with all input types.

2. **Master Effects Processing**: Your effects are applied in the 64-bit DSP after all channel mixing, meaning they affect the entire stereo mix before final D/A conversion.

3. **ESS DAC Advantage**: The CDJ-3000X's upgraded ESS DAC provides improved clarity in highs and punchier bass compared to the CDJ-3000, though differences are most noticeable on high-quality sound systems.

4. **Sample Rate Change**: Audio is processed at 96 kHz in the CDJ but reduced to 48 kHz in the mixer's DSP. This is standard for DJ mixers and maintains excellent audio quality.

5. **Unbalanced vs Balanced**: Your RCA connections are unbalanced, which can be more susceptible to noise over long cable runs compared to balanced XLR connections.

