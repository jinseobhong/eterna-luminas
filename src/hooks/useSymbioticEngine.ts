/**
 * @file useSymbioticEngine.ts
 * @description Layer 3 Reactive Adapter Hook: Binds the pure Layer 2 reducer to React lifecycle,
 * isolating timer side-effects and exposing strongly-typed intent dispatchers.
 */

import { useCallback, useEffect, useReducer } from 'react';
import type { SymbioticEngineState } from '../core/contracts/symbioticContracts';
import { INITIAL_SYMBIOTIC_STATE } from '../core/domain/symbioticConstants';
import { symbioticEngineReducer } from '../core/domain/symbioticReducer';

export interface SymbioticEngineViewModel {
  readonly state: SymbioticEngineState;
  readonly isOverdriveActive: boolean;
  readonly triggerWombOverdrive: () => void;
  readonly squishBellyRolls: () => void;
  readonly setAmbientLight: (valuePercent: number) => void;
  readonly setPheromoneDensity: (valuePercent: number) => void;
  readonly toggleAcousticSeal: () => void;
  readonly toggleWaterbedSuspension: () => void;
}

export function useSymbioticEngine(): SymbioticEngineViewModel {
  const [state, dispatch] = useReducer(
    symbioticEngineReducer,
    INITIAL_SYMBIOTIC_STATE
  );

  const isOverdriveActive =
    state.telemetry.resonancePhase.kind === 'OVERDRIVE_CLIMAX_SURGE';

  useEffect(() => {
    if (!isOverdriveActive) {
      return undefined;
    }

    const intervalId = window.setInterval(() => {
      const randomDopamineDelta = Math.floor(Math.random() * 40) + 10;
      dispatch({
        type: 'PULSE_OVERDRIVE_TICK',
        dopamineDelta: randomDopamineDelta,
        tempDeltaCelsius: 0.05,
      });
    }, 500);

    return () => {
      window.clearInterval(intervalId);
    };
  }, [isOverdriveActive]);

  const triggerWombOverdrive = useCallback(() => {
    dispatch({
      type: 'TRIGGER_WOMB_OVERDRIVE',
      timestamp: new Date().toLocaleTimeString(),
    });
  }, []);

  const squishBellyRolls = useCallback(() => {
    dispatch({
      type: 'SQUISH_BELLY_ROLLS',
      timestamp: new Date().toLocaleTimeString(),
    });
  }, []);

  const setAmbientLight = useCallback((valuePercent: number) => {
    dispatch({
      type: 'SET_AMBIENT_LIGHT',
      valuePercent,
    });
  }, []);

  const setPheromoneDensity = useCallback((valuePercent: number) => {
    dispatch({
      type: 'SET_PHEROMONE_DENSITY',
      valuePercent,
    });
  }, []);

  const toggleAcousticSeal = useCallback(() => {
    dispatch({
      type: 'TOGGLE_ACOUSTIC_SEAL',
      timestamp: new Date().toLocaleTimeString(),
    });
  }, []);

  const toggleWaterbedSuspension = useCallback(() => {
    dispatch({
      type: 'TOGGLE_WATERBED_SUSPENSION',
      timestamp: new Date().toLocaleTimeString(),
    });
  }, []);

  return {
    state,
    isOverdriveActive,
    triggerWombOverdrive,
    squishBellyRolls,
    setAmbientLight,
    setPheromoneDensity,
    toggleAcousticSeal,
    toggleWaterbedSuspension,
  };
}
