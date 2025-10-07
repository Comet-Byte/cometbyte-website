"use client";

import React, { useState, useEffect, useRef } from "react";
import { useTranslation } from 'react-i18next';

// Premium SVG Components with Apple-level design;

const StartupDigitalSVG = ({ isActive }: { isActive: boolean }) => {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    return (
        <div className="relative w-full h-full">
            <svg viewBox="0 0 400 400" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <linearGradient id="startupGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#8B5CF6" />
                        <stop offset="100%" stopColor="#D946EF" />
                    </linearGradient>

                    <linearGradient id="rocketGrad" x1="0%" y1="100%" x2="0%" y2="0%">
                        <stop offset="0%" stopColor="#8B5CF6" />
                        <stop offset="100%" stopColor="#C084FC" />
                    </linearGradient>

                    <linearGradient id="flameGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#F59E0B" />
                        <stop offset="70%" stopColor="#EF4444" />
                        <stop offset="100%" stopColor="#DC2626" />
                    </linearGradient>

                    <filter id="softGlow">
                        <feGaussianBlur stdDeviation="3" result="blur"/>
                        <feComposite in="SourceGraphic" in2="blur" operator="over"/>
                    </filter>
                </defs>

                {/* Central Rocket - Simplified */}
                <g transform="translate(200, 280)" opacity={mounted ? 1 : 0}>
                    {/* Rocket Body */}
                    <g>
                        {/* Main Body */}
                        <ellipse cx="0" cy="-30" rx="18" ry="32" fill="url(#rocketGrad)">
                            <animateTransform
                                attributeName="transform"
                                type="translate"
                                values="0 0;0 -2;0 0"
                                dur="2s"
                                repeatCount="indefinite"
                            />
                        </ellipse>
                        
                        {/* Nose Cone */}
                        <path d="M -18,-62 Q 0,-80 18,-62 Z" fill="#C084FC">
                            <animateTransform
                                attributeName="transform"
                                type="translate"
                                values="0 0;0 -2;0 0"
                                dur="2s"
                                repeatCount="indefinite"
                            />
                        </path>

                        {/* Window */}
                        <circle cx="0" cy="-45" r="6" fill="#EDE9FE" opacity="0.9">
                            <animate attributeName="opacity" values="0.7;1;0.7" dur="2s" repeatCount="indefinite" />
                        </circle>

                        {/* Side Fins - Simplified */}
                        <path d="M -18,-15 L -30,10 L -18,5 Z" fill="#7C3AED" />
                        <path d="M 18,-15 L 30,10 L 18,5 Z" fill="#7C3AED" />
                    </g>

                    {/* Simplified Flame */}
                    <g filter="url(#softGlow)">
                        {/* Main Flame */}
                        <path d="M -12,5 Q 0,35 12,5 Z" fill="url(#flameGrad)" opacity="0.9">
                            <animate 
                                attributeName="d" 
                                values="M -12,5 Q 0,35 12,5 Z;
                                        M -14,5 Q 0,40 14,5 Z;
                                        M -12,5 Q 0,35 12,5 Z" 
                                dur="0.5s" 
                                repeatCount="indefinite" 
                            />
                        </path>

                        {/* Core Flame */}
                        <path d="M -6,8 Q 0,25 6,8 Z" fill="#FCD34D" opacity="0.8">
                            <animate 
                                attributeName="d" 
                                values="M -6,8 Q 0,25 6,8 Z;
                                        M -8,8 Q 0,30 8,8 Z;
                                        M -6,8 Q 0,25 6,8 Z" 
                                dur="0.4s" 
                                repeatCount="indefinite" 
                            />
                        </path>
                    </g>

                    {/* Simple Smoke Particles */}
                    {[0, 1, 2].map((i) => (
                        <circle 
                            key={i} 
                            cx={-8 + i * 8} 
                            cy={45 + i * 8} 
                            r={2 + i * 0.5} 
                            fill="#9CA3AF" 
                            opacity="0.3"
                        >
                            <animate 
                                attributeName="cy" 
                                values={`${45 + i * 8};${55 + i * 8}`}
                                dur="3s" 
                                begin={`${i * 0.3}s`}
                                repeatCount="indefinite" 
                            />
                            <animate 
                                attributeName="opacity" 
                                values="0.3;0;0.3" 
                                dur="3s" 
                                begin={`${i * 0.3}s`}
                                repeatCount="indefinite" 
                            />
                        </circle>
                    ))}
                </g>

                {/* Simplified Network Nodes */}
                <g opacity={mounted ? 1 : 0}>
                    {/* Central Hub */}
                    <circle cx="200" cy="100" r="10" fill="url(#startupGrad)">
                        <animate attributeName="r" values="10;12;10" dur="2s" repeatCount="indefinite" />
                    </circle>

                    {/* Simple Nodes */}
                    {[
                        { x: 120, y: 80 },
                        { x: 280, y: 80 },
                        { x: 100, y: 140 },
                        { x: 300, y: 140 }
                    ].map((node, i) => (
                        <g key={i}>
                            {/* Connection Line */}
                            <line 
                                x1="200" 
                                y1="100" 
                                x2={node.x} 
                                y2={node.y} 
                                stroke="url(#startupGrad)" 
                                strokeWidth="1" 
                                opacity="0.3"
                            >
                                <animate 
                                    attributeName="opacity" 
                                    values="0.2;0.5;0.2" 
                                    dur="2s" 
                                    begin={`${i * 0.3}s`}
                                    repeatCount="indefinite" 
                                />
                            </line>

                            {/* Node */}
                            <circle 
                                cx={node.x} 
                                cy={node.y} 
                                r="6" 
                                fill="url(#startupGrad)" 
                                opacity="0.8"
                            >
                                <animate 
                                    attributeName="r" 
                                    values="6;8;6" 
                                    dur="2s" 
                                    begin={`${i * 0.2}s`}
                                    repeatCount="indefinite" 
                                />
                            </circle>
                        </g>
                    ))}
                </g>

                {/* Simple Growth Indicator */}
                <g transform="translate(320, 350)" opacity={mounted ? 0.8 : 0}>
                    {/* Growing Line */}
                    <line 
                        x1="-40" 
                        y1="0" 
                        x2="40" 
                        y2="0" 
                        stroke="url(#startupGrad)" 
                        strokeWidth="3" 
                        strokeLinecap="round"
                    >
                        <animate 
                            attributeName="x2" 
                            values="-40;40;-40" 
                            dur="3s" 
                            repeatCount="indefinite" 
                        />
                    </line>

                    {/* Upward Arrow */}
                    <path d="M 30,-15 L 25,-10 L 35,-10 Z" fill="#10B981" opacity="0.8">
                        <animateTransform
                            attributeName="transform"
                            type="translate"
                            values="0 0;0 -3;0 0"
                            dur="2s"
                            repeatCount="indefinite"
                        />
                    </path>
                </g>

                {/* Simple Speed Lines */}
                <g opacity={mounted ? 0.3 : 0}>
                    {[0, 1, 2].map((i) => (
                        <line 
                            key={i}
                            x1="200" 
                            y1={180 + i * 40}
                            x2="200" 
                            y2={220 + i * 40}
                            stroke="#8B5CF6"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                        >
                            <animate 
                                attributeName="y1" 
                                values={`${180 + i * 40};${240 + i * 40}`}
                                dur="2s" 
                                begin={`${i * 0.2}s`}
                                repeatCount="indefinite" 
                            />
                            <animate 
                                attributeName="y2" 
                                values={`${220 + i * 40};${280 + i * 40}`}
                                dur="2s" 
                                begin={`${i * 0.2}s`}
                                repeatCount="indefinite" 
                            />
                        </line>
                    ))}
                </g>

                {/* Simple Sparkles */}
                <g opacity={mounted ? 0.6 : 0}>
                    {[
                        { x: 80, y: 60 },
                        { x: 320, y: 70 },
                        { x: 340, y: 200 },
                        { x: 60, y: 220 }
                    ].map((star, i) => (
                        <circle 
                            key={i} 
                            cx={star.x} 
                            cy={star.y} 
                            r="2" 
                            fill="#A855F7"
                        >
                            <animate 
                                attributeName="opacity" 
                                values="0.3;1;0.3" 
                                dur="3s" 
                                begin={`${i * 0.5}s`}
                                repeatCount="indefinite" 
                            />
                            <animate 
                                attributeName="r" 
                                values="2;3;2" 
                                dur="2s" 
                                begin={`${i * 0.5}s`}
                                repeatCount="indefinite" 
                            />
                        </circle>
                    ))}
                </g>
            </svg>
        </div>
    );
};

const SocialAutomationSVG = ({ isActive }: { isActive: boolean }) => {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    return (
        <div className="relative w-full h-full">
            <svg viewBox="0 0 400 400" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <linearGradient id="socialGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#10B981" />
                        <stop offset="100%" stopColor="#059669" />
                    </linearGradient>
                    
                    <linearGradient id="whatsappGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#25D366" />
                        <stop offset="100%" stopColor="#128C7E" />
                    </linearGradient>
                    
                    <linearGradient id="instaGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#F58529" />
                        <stop offset="25%" stopColor="#DD2A7B" />
                        <stop offset="50%" stopColor="#8134AF" />
                        <stop offset="100%" stopColor="#515BD4" />
                    </linearGradient>

                    <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                        <feGaussianBlur stdDeviation="3" result="blur" />
                        <feComposite in="SourceGraphic" in2="blur" operator="over" />
                    </filter>
                    
                    <filter id="softShadow" x="-20%" y="-20%" width="140%" height="140%">
                        <feGaussianBlur in="SourceAlpha" stdDeviation="2"/>
                        <feOffset dx="0" dy="2" result="offsetblur"/>
                        <feComponentTransfer>
                            <feFuncA type="linear" slope="0.2"/>
                        </feComponentTransfer>
                        <feMerge>
                            <feMergeNode/>
                            <feMergeNode in="SourceGraphic"/>
                        </feMerge>
                    </filter>
                </defs>

                {/* Central AI Bot */}
                <g transform="translate(200, 200)" opacity={mounted ? 1 : 0}>
                    {/* Bot Body - Main Circle */}
                    <circle r="55" fill="url(#socialGrad)" filter="url(#softShadow)">
                        <animate attributeName="r" values="55;57;55" dur="4s" repeatCount="indefinite" calcMode="spline" keySplines="0.4 0 0.2 1; 0.4 0 0.2 1" />
                    </circle>
                    
                    {/* Bot Face Background */}
                    <circle r="42" fill="white" opacity="0.95"/>
                    
                    {/* Bot Eyes */}
                    <circle cx="-15" cy="-8" r="5" fill="#10B981">
                        <animate attributeName="cy" values="-8;-6;-8" dur="3s" repeatCount="indefinite" />
                    </circle>
                    <circle cx="15" cy="-8" r="5" fill="#10B981">
                        <animate attributeName="cy" values="-8;-6;-8" dur="3s" repeatCount="indefinite" />
                    </circle>
                    
                    {/* Bot Smile */}
                    <path d="M -18,8 Q 0,18 18,8" stroke="#10B981" strokeWidth="3" fill="none" strokeLinecap="round">
                        <animate attributeName="d" values="M -18,8 Q 0,18 18,8; M -18,8 Q 0,20 18,8; M -18,8 Q 0,18 18,8" dur="3s" repeatCount="indefinite" />
                    </path>
                    
                    {/* Bot Antenna */}
                    <line x1="0" y1="-55" x2="0" y2="-68" stroke="#10B981" strokeWidth="2.5" strokeLinecap="round">
                        <animate attributeName="y2" values="-68;-72;-68" dur="2s" repeatCount="indefinite" />
                    </line>
                    <circle cy="-68" r="4" fill="#10B981">
                        <animate attributeName="cy" values="-68;-72;-68" dur="2s" repeatCount="indefinite" />
                        <animate attributeName="opacity" values="0.8;1;0.8" dur="1.5s" repeatCount="indefinite" />
                    </circle>
                </g>

                {/* WhatsApp Icon - Left */}
                <g transform="translate(70, 120)" opacity={mounted ? 0.9 : 0}>
                    <circle r="32" fill="url(#whatsappGrad)" filter="url(#softShadow)">
                        <animate attributeName="r" values="32;34;32" dur="3s" begin="0.5s" repeatCount="indefinite" />
                    </circle>
                    
                    {/* WhatsApp Phone Icon */}
                    <path d="M -8,-10 L -6,-12 L 0,-8 L -2,-2 L 2,2 L 8,-2 L 12,0 L 10,6 L 8,8 Q 4,10 -2,6 Q -8,2 -10,-4 Q -12,-10 -8,-10 Z" 
                          fill="white" opacity="0.95"/>
                    
                    {/* Pulse Ring */}
                    <circle r="32" fill="none" stroke="white" strokeWidth="2" opacity="0.4">
                        <animate attributeName="r" values="32;42;32" dur="2s" repeatCount="indefinite" />
                        <animate attributeName="opacity" values="0.4;0;0.4" dur="2s" repeatCount="indefinite" />
                    </circle>
                </g>

                {/* Instagram Icon - Right */}
                <g transform="translate(330, 120)" opacity={mounted ? 0.9 : 0}>
                    <rect x="-32" y="-32" width="64" height="64" rx="14" fill="url(#instaGrad)" filter="url(#softShadow)">
                        <animate attributeName="width" values="64;68;64" dur="3s" begin="0.8s" repeatCount="indefinite" />
                        <animate attributeName="height" values="64;68;64" dur="3s" begin="0.8s" repeatCount="indefinite" />
                        <animate attributeName="x" values="-32;-34;-32" dur="3s" begin="0.8s" repeatCount="indefinite" />
                        <animate attributeName="y" values="-32;-34;-32" dur="3s" begin="0.8s" repeatCount="indefinite" />
                    </rect>
                    
                    {/* Instagram Camera */}
                    <rect x="-20" y="-20" width="40" height="40" rx="9" fill="none" stroke="white" strokeWidth="3"/>
                    <circle r="11" fill="none" stroke="white" strokeWidth="3"/>
                    <circle cx="14" cy="-14" r="3" fill="white"/>
                    
                    {/* Pulse Ring */}
                    <rect x="-32" y="-32" width="64" height="64" rx="14" fill="none" stroke="white" strokeWidth="2" opacity="0.4">
                        <animate attributeName="width" values="64;74;64" dur="2s" begin="0.5s" repeatCount="indefinite" />
                        <animate attributeName="height" values="64;74;64" dur="2s" begin="0.5s" repeatCount="indefinite" />
                        <animate attributeName="x" values="-32;-37;-32" dur="2s" begin="0.5s" repeatCount="indefinite" />
                        <animate attributeName="y" values="-32;-37;-32" dur="2s" begin="0.5s" repeatCount="indefinite" />
                        <animate attributeName="opacity" values="0.4;0;0.4" dur="2s" begin="0.5s" repeatCount="indefinite" />
                    </rect>
                </g>

                {/* Message Bubbles - Left Side (Incoming) */}
                <g opacity={mounted ? 1 : 0}>
                    {/* Customer Message 1 */}
                    <rect x="50" y="250" width="90" height="35" rx="18" fill="#E5E7EB" filter="url(#softShadow)">
                        <animate attributeName="y" values="250;248;250" dur="4s" repeatCount="indefinite" />
                        <animate attributeName="opacity" values="0.9;1;0.9" dur="4s" repeatCount="indefinite" />
                    </rect>
                    <line x1="60" y1="262" x2="125" y2="262" stroke="#9CA3AF" strokeWidth="2.5" strokeLinecap="round" opacity="0.6"/>
                    <line x1="60" y1="272" x2="105" y2="272" stroke="#9CA3AF" strokeWidth="2.5" strokeLinecap="round" opacity="0.6"/>
                    
                    {/* Customer Message 2 */}
                    <rect x="40" y="295" width="75" height="32" rx="16" fill="#E5E7EB" filter="url(#softShadow)">
                        <animate attributeName="y" values="295;293;295" dur="4s" begin="0.5s" repeatCount="indefinite" />
                        <animate attributeName="opacity" values="0.9;1;0.9" dur="4s" begin="0.5s" repeatCount="indefinite" />
                    </rect>
                    <line x1="50" y1="306" x2="100" y2="306" stroke="#9CA3AF" strokeWidth="2.5" strokeLinecap="round" opacity="0.6"/>
                    <line x1="50" y1="316" x2="85" y2="316" stroke="#9CA3AF" strokeWidth="2.5" strokeLinecap="round" opacity="0.6"/>
                </g>

                {/* AI Response Bubbles - Right Side */}
                <g opacity={mounted ? 1 : 0}>
                    {/* AI Response 1 */}
                    <rect x="260" y="255" width="100" height="38" rx="19" fill="url(#socialGrad)" filter="url(#softShadow)">
                        <animate attributeName="y" values="255;253;255" dur="3.5s" begin="0.3s" repeatCount="indefinite" />
                        <animate attributeName="width" values="100;102;100" dur="3.5s" begin="0.3s" repeatCount="indefinite" />
                    </rect>
                    <line x1="270" y1="267" x2="345" y2="267" stroke="white" strokeWidth="2.5" strokeLinecap="round" opacity="0.9"/>
                    <line x1="270" y1="277" x2="330" y2="277" stroke="white" strokeWidth="2.5" strokeLinecap="round" opacity="0.9"/>
                    <line x1="270" y1="283" x2="320" y2="283" stroke="white" strokeWidth="2" strokeLinecap="round" opacity="0.7"/>
                    
                    {/* AI Response 2 with Checkmark */}
                    <rect x="280" y="302" width="85" height="32" rx="16" fill="url(#socialGrad)" filter="url(#softShadow)">
                        <animate attributeName="y" values="302;300;302" dur="3.5s" begin="0.7s" repeatCount="indefinite" />
                    </rect>
                    <line x1="290" y1="313" x2="350" y2="313" stroke="white" strokeWidth="2.5" strokeLinecap="round" opacity="0.9"/>
                    <line x1="290" y1="323" x2="335" y2="323" stroke="white" strokeWidth="2" strokeLinecap="round" opacity="0.7"/>
                    
                    {/* Checkmark for delivered */}
                    <path d="M 352,328 L 355,331 L 360,326" stroke="#10B981" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <animate attributeName="opacity" values="0;1;1" dur="1s" begin="1s" fill="freeze" />
                    </path>
                </g>

                {/* Connection Lines - Animated Data Flow */}
                <g opacity={mounted ? 0.5 : 0}>
                    {/* Line from WhatsApp to Bot */}
                    <path d="M 95,140 Q 120,160 165,185" stroke="#10B981" strokeWidth="2.5" strokeDasharray="6 4" fill="none" strokeLinecap="round">
                        <animate attributeName="stroke-dashoffset" values="0;-10;0" dur="2s" repeatCount="indefinite" />
                    </path>
                    
                    {/* Line from Instagram to Bot */}
                    <path d="M 305,140 Q 280,160 235,185" stroke="#DD2A7B" strokeWidth="2.5" strokeDasharray="6 4" fill="none" strokeLinecap="round">
                        <animate attributeName="stroke-dashoffset" values="0;-10;0" dur="2s" begin="0.5s" repeatCount="indefinite" />
                    </path>
                    
                    {/* Data particles on lines */}
                    <circle r="3" fill="#10B981" filter="url(#glow)">
                        <animateMotion dur="2s" repeatCount="indefinite" path="M 95,140 Q 120,160 165,185"/>
                        <animate attributeName="opacity" values="0;1;1;0" dur="2s" repeatCount="indefinite" />
                    </circle>
                    
                    <circle r="3" fill="#DD2A7B" filter="url(#glow)">
                        <animateMotion dur="2s" repeatCount="indefinite" begin="0.5s" path="M 305,140 Q 280,160 235,185"/>
                        <animate attributeName="opacity" values="0;1;1;0" dur="2s" begin="0.5s" repeatCount="indefinite" />
                    </circle>
                </g>

                {/* Typing Indicator */}
                <g transform="translate(270, 350)" opacity={mounted ? 0.8 : 0}>
                    <rect x="-25" y="-12" width="50" height="24" rx="12" fill="url(#socialGrad)" opacity="0.9" filter="url(#softShadow)"/>
                    <circle cx="-10" cy="0" r="3" fill="white">
                        <animate attributeName="opacity" values="0.3;1;0.3" dur="1.4s" repeatCount="indefinite" />
                        <animate attributeName="cy" values="0;-2;0" dur="1.4s" repeatCount="indefinite" />
                    </circle>
                    <circle cx="0" cy="0" r="3" fill="white">
                        <animate attributeName="opacity" values="0.3;1;0.3" dur="1.4s" begin="0.2s" repeatCount="indefinite" />
                        <animate attributeName="cy" values="0;-2;0" dur="1.4s" begin="0.2s" repeatCount="indefinite" />
                    </circle>
                    <circle cx="10" cy="0" r="3" fill="white">
                        <animate attributeName="opacity" values="0.3;1;0.3" dur="1.4s" begin="0.4s" repeatCount="indefinite" />
                        <animate attributeName="cy" values="0;-2;0" dur="1.4s" begin="0.4s" repeatCount="indefinite" />
                    </circle>
                </g>

                {/* Decorative Elements - Floating Sparkles */}
                <g opacity={mounted ? 0.6 : 0}>
                    <circle cx="150" cy="80" r="2" fill="#10B981">
                        <animate attributeName="opacity" values="0.3;1;0.3" dur="3s" repeatCount="indefinite" />
                        <animate attributeName="cy" values="80;75;80" dur="3s" repeatCount="indefinite" />
                    </circle>
                    <circle cx="250" cy="90" r="2.5" fill="#059669">
                        <animate attributeName="opacity" values="0.3;1;0.3" dur="2.5s" begin="0.5s" repeatCount="indefinite" />
                        <animate attributeName="cy" values="90;85;90" dur="2.5s" begin="0.5s" repeatCount="indefinite" />
                    </circle>
                    <circle cx="180" cy="340" r="2" fill="#10B981">
                        <animate attributeName="opacity" values="0.3;1;0.3" dur="3.5s" begin="1s" repeatCount="indefinite" />
                        <animate attributeName="cy" values="340;345;340" dur="3.5s" begin="1s" repeatCount="indefinite" />
                    </circle>
                </g>
            </svg>
        </div>
    );
};

const IntelligenceSVG = ({ isActive }: { isActive: boolean }) => {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    return (
        <div className="relative w-full h-full">
            <svg viewBox="0 0 400 400" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    {/* Advanced AI Gradients */}
                    <linearGradient id="quantumCore" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#667EEA" />
                        <stop offset="50%" stopColor="#764BA2" />
                        <stop offset="100%" stopColor="#5A67D8" />
                    </linearGradient>
                    
                    <linearGradient id="neuralPulse" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#F093FB" />
                        <stop offset="100%" stopColor="#F5576C" />
                    </linearGradient>
                    
                    <linearGradient id="dataStream" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#4FACFE" />
                        <stop offset="100%" stopColor="#00F2FE" />
                    </linearGradient>

                    {/* Advanced Glow Effects */}
                    <filter id="quantumGlow" x="-50%" y="-50%" width="200%" height="200%">
                        <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
                        <feColorMatrix in="blur" type="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 30 -10" result="glow"/>
                        <feBlend in="SourceGraphic" in2="glow" mode="screen" />
                    </filter>

                    <filter id="particleGlow">
                        <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
                        <feMerge> 
                            <feMergeNode in="coloredBlur"/>
                            <feMergeNode in="SourceGraphic"/>
                        </feMerge>
                    </filter>

                    {/* Morphing Path Animation */}
                    <path id="quantumWave" d="M-60,0 C-30,-40 30,40 60,0 S90,-40 120,0" fill="none"/>
                </defs>

                {/* Central Quantum AI Core */}
                <g transform="translate(200, 200)" opacity={mounted ? 1 : 0}>
                    {/* Pulsing Quantum Sphere */}
                    <circle r="50" fill="url(#quantumCore)" opacity="0.95" filter="url(#quantumGlow)">
                        <animate attributeName="r" values="48;52;48" dur="4s" repeatCount="indefinite" calcMode="spline" keySplines="0.4 0 0.2 1; 0.4 0 0.2 1"/>
                        <animate attributeName="opacity" values="0.9;1;0.9" dur="3s" repeatCount="indefinite"/>
                    </circle>

                    {/* Neural Network Matrix */}
                    <g opacity="0.8">
                        {/* Rotating Neural Rings */}
                        <g transform="rotate(0)">
                            <circle r="35" fill="none" stroke="url(#neuralPulse)" strokeWidth="1.5" strokeOpacity="0.6">
                                <animate attributeName="r" values="33;37;33" dur="3s" repeatCount="indefinite"/>
                                <animateTransform attributeName="transform" type="rotate" from="0 0 0" to="360 0 0" dur="12s" repeatCount="indefinite"/>
                            </circle>
                        </g>
                        
                        <g transform="rotate(120)">
                            <circle r="25" fill="none" stroke="url(#dataStream)" strokeWidth="1" strokeOpacity="0.5">
                                <animate attributeName="r" values="23;27;23" dur="2.5s" repeatCount="indefinite"/>
                                <animateTransform attributeName="transform" type="rotate" from="120 0 0" to="480 0 0" dur="8s" repeatCount="indefinite"/>
                            </circle>
                        </g>
                    </g>

                    {/* Quantum Processing Nodes */}
                    {[0, 72, 144, 216, 288].map((rotation, i) => (
                        <g key={i} transform={`rotate(${rotation})`}>
                            {/* Orbiting Quantum Node */}
                            <circle cx="75" cy="0" r="8" fill="url(#neuralPulse)" opacity="0.9" filter="url(#particleGlow)">
                                <animate attributeName="r" values="6;10;6" dur="2s" begin={`${i * 0.4}s`} repeatCount="indefinite"/>
                                <animate attributeName="opacity" values="0.7;1;0.7" dur="2s" begin={`${i * 0.4}s`} repeatCount="indefinite"/>
                                <animateTransform attributeName="transform" type="rotate" 
                                                from={`${rotation} 0 0`} to={`${rotation + 360} 0 0`} 
                                                dur="18s" repeatCount="indefinite"/>
                            </circle>

                            {/* Energy Trail */}
                            <circle cx="75" cy="0" r="3" fill="white" opacity="0">
                                <animate attributeName="r" values="2;8;2" dur="1.5s" begin={`${i * 0.4}s`} repeatCount="indefinite"/>
                                <animate attributeName="opacity" values="0;0.6;0" dur="1.5s" begin={`${i * 0.4}s`} repeatCount="indefinite"/>
                            </circle>
                        </g>
                    ))}

                    {/* Floating Data Particles */}
                    <g opacity="0.7">
                        {Array.from({ length: 8 }).map((_, i) => (
                            <circle key={i} r="2" fill="white" transform={`rotate(${i * 45}) translate(60, 0)`}>
                                <animate attributeName="fill" values="#FFFFFF; #4FACFE; #F093FB; #FFFFFF" 
                                         dur="2s" begin={`${i * 0.3}s`} repeatCount="indefinite"/>
                                <animate attributeName="r" values="1.5;3;1.5" dur="2s" begin={`${i * 0.3}s`} repeatCount="indefinite"/>
                            </circle>
                        ))}
                    </g>

                    {/* Central Processing Dot */}
                    <circle r="3" fill="white" opacity="0.9">
                        <animate attributeName="r" values="2;4;2" dur="1s" repeatCount="indefinite"/>
                        <animate attributeName="opacity" values="0.7;1;0.7" dur="1s" repeatCount="indefinite"/>
                    </circle>
                </g>

                {/* Advanced Data Flow - Radial Streams */}
                <g opacity={mounted ? 0.8 : 0}>
                    {Array.from({ length: 12 }).map((_, i) => {
                        const angle = (i * 30) * Math.PI / 180;
                        return (
                            <circle key={i} 
                                    cx={200 + Math.cos(angle) * 180} 
                                    cy={200 + Math.sin(angle) * 180} 
                                    r="2" 
                                    fill="url(#dataStream)" 
                                    opacity="0.7">
                                <animate attributeName="r" values="1;4;1" 
                                         dur="2s" begin={`${i * 0.2}s`} repeatCount="indefinite"/>
                                <animate attributeName="opacity" values="0.4;0.9;0.4" 
                                         dur="2s" begin={`${i * 0.2}s`} repeatCount="indefinite"/>
                            </circle>
                        );
                    })}
                </g>

                {/* Quantum Energy Waves */}
                <g opacity={mounted ? 0.3 : 0}>
                    <circle cx="200" cy="200" r="140" fill="none" stroke="url(#quantumCore)" strokeWidth="1.5">
                        <animate attributeName="r" values="135;145;135" dur="6s" repeatCount="indefinite"/>
                        <animate attributeName="strokeOpacity" values="0.2;0.5;0.2" dur="6s" repeatCount="indefinite"/>
                    </circle>
                    <circle cx="200" cy="200" r="110" fill="none" stroke="url(#neuralPulse)" strokeWidth="1">
                        <animate attributeName="r" values="105;115;105" dur="5s" repeatCount="indefinite"/>
                        <animate attributeName="strokeOpacity" values="0.2;0.4;0.2" dur="5s" repeatCount="indefinite"/>
                    </circle>
                </g>

                {/* Neural Connection Sparks */}
                <g opacity={mounted ? 0.6 : 0}>
                    {Array.from({ length: 20 }).map((_, i) => {
                        const angle = Math.random() * 360;
                        const distance = 80 + Math.random() * 80;
                        return (
                            <circle key={i} 
                                    cx={200 + Math.cos(angle * Math.PI/180) * distance} 
                                    cy={200 + Math.sin(angle * Math.PI/180) * distance} 
                                    r={0.5 + Math.random() * 1.5} 
                                    fill={Math.random() > 0.5 ? "url(#neuralPulse)" : "url(#dataStream)"}>
                                <animate attributeName="r" values="0.5;2;0.5" 
                                         dur={2 + Math.random() * 2} repeatCount="indefinite"/>
                                <animate attributeName="opacity" values="0.3;0.8;0.3" 
                                         dur={2 + Math.random() * 2} repeatCount="indefinite"/>
                            </circle>
                        );
                    })}
                </g>
            </svg>
        </div>
    );
};

const RemoteTeamSVG = ({ isActive }: { isActive: boolean }) => {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    return (
        <div className="relative w-full h-full">
            <svg viewBox="0 0 400 400" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    {/* Modern Collaboration Gradients */}
                    <linearGradient id="hubGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#8B5CF6" />
                        <stop offset="100%" stopColor="#6366F1" />
                    </linearGradient>
                    
                    <linearGradient id="teamGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#10B981" />
                        <stop offset="100%" stopColor="#059669" />
                    </linearGradient>
                    
                    <linearGradient id="projectGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#F59E0B" />
                        <stop offset="100%" stopColor="#D97706" />
                    </linearGradient>

                    {/* Glow and Shadow Effects */}
                    <filter id="hubGlow" x="-50%" y="-50%" width="200%" height="200%">
                        <feGaussianBlur in="SourceGraphic" stdDeviation="6" result="blur" />
                        <feColorMatrix in="blur" type="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 20 -8" result="glow"/>
                        <feBlend in="SourceGraphic" in2="glow" mode="screen" />
                    </filter>

                    <filter id="nodeGlow">
                        <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
                        <feMerge> 
                            <feMergeNode in="coloredBlur"/>
                            <feMergeNode in="SourceGraphic"/>
                        </feMerge>
                    </filter>

                    {/* Project Progress Pattern */}
                    <pattern id="progressPattern" x="0" y="0" width="10" height="10" patternUnits="userSpaceOnUse">
                        <rect width="10" height="10" fill="transparent"/>
                        <circle cx="5" cy="5" r="1" fill="#10B981" opacity="0.6"/>
                    </pattern>
                </defs>

                {/* Global Connection Network */}
                <g transform="translate(200, 200)" opacity={mounted ? 1 : 0}>
                    {/* Central Project Hub */}
                    <g filter="url(#hubGlow)">
                        <rect x="-25" y="-25" width="50" height="50" rx="8" fill="url(#hubGrad)" opacity="0.95">
                            <animate attributeName="opacity" values="0.9;1;0.9" dur="4s" repeatCount="indefinite"/>
                        </rect>
                        
                        {/* Hub Activity Indicator */}
                        <circle r="4" fill="white" opacity="0.9">
                            <animate attributeName="r" values="3;5;3" dur="2s" repeatCount="indefinite"/>
                            <animate attributeName="opacity" values="0.7;1;0.7" dur="2s" repeatCount="indefinite"/>
                        </circle>
                    </g>

                    {/* Global Team Nodes with Different Timezones */}
                    {[
                        { angle: 0, distance: 130, delay: 0, size: 12 },    // Americas
                        { angle: 60, distance: 140, delay: 0.2, size: 10 }, // Europe
                        { angle: 120, distance: 130, delay: 0.4, size: 11 }, // Africa
                        { angle: 180, distance: 140, delay: 0.6, size: 10 }, // Middle East
                        { angle: 240, distance: 130, delay: 0.8, size: 12 }, // Asia
                        { angle: 300, distance: 140, delay: 1.0, size: 11 }  // Australia
                    ].map((node, i) => (
                        <g key={i} transform={`rotate(${node.angle}) translate(${node.distance}, 0)`}>
                            {/* Team Node */}
                            <circle r={node.size} fill="url(#teamGrad)" opacity="0.9" filter="url(#nodeGlow)">
                                <animate attributeName="r" values={`${node.size-1};${node.size+1};${node.size-1}`} 
                                         dur="3s" begin={`${node.delay}s`} repeatCount="indefinite"/>
                            </circle>
                            
                            {/* Team Activity Pulse */}
                            <circle r={node.size} fill="url(#teamGrad)" opacity="0">
                                <animate attributeName="r" values={`${node.size};${node.size+15};${node.size+30}`} 
                                         dur="4s" begin={`${node.delay}s`} repeatCount="indefinite"/>
                                <animate attributeName="opacity" values="0.4;0.2;0" 
                                         dur="4s" begin={`${node.delay}s`} repeatCount="indefinite"/>
                            </circle>

                            {/* Connection Pathway */}
                            <path d="M-25,0 L-120,0" stroke="url(#hubGrad)" strokeWidth="2" strokeOpacity="0.5" 
                                  strokeDasharray="0 100" fill="none">
                                <animate attributeName="stroke-dasharray" values="0 100; 95 5; 0 100" 
                                         dur="3s" begin={`${node.delay}s`} repeatCount="indefinite"/>
                            </path>
                        </g>
                    ))}

                    {/* Project Collaboration Waves */}
                    <g opacity="0.3">
                        <circle r="90" fill="none" stroke="url(#projectGrad)" strokeWidth="1">
                            <animate attributeName="r" values="85;95;85" dur="5s" repeatCount="indefinite"/>
                            <animate attributeName="strokeOpacity" values="0.2;0.5;0.2" dur="5s" repeatCount="indefinite"/>
                        </circle>
                        <circle r="110" fill="none" stroke="url(#teamGrad)" strokeWidth="1">
                            <animate attributeName="r" values="105;115;105" dur="6s" repeatCount="indefinite"/>
                            <animate attributeName="strokeOpacity" values="0.2;0.4;0.2" dur="6s" repeatCount="indefinite"/>
                        </circle>
                    </g>
                </g>

                {/* Project Work Items - Floating Tasks */}
                <g opacity={mounted ? 0.8 : 0}>
                    {[
                        { x: 80, y: 90, type: 'design', delay: 0 },
                        { x: 320, y: 280, type: 'code', delay: 0.5 },
                        { x: 90, y: 300, type: 'testing', delay: 1 },
                        { x: 300, y: 100, type: 'review', delay: 1.5 }
                    ].map((task, i) => (
                        <g key={i} transform={`translate(${task.x}, ${task.y})`}>
                            {/* Task Card */}
                            <rect x="-20" y="-15" width="40" height="30" rx="6" 
                                  fill={task.type === 'design' ? "url(#hubGrad)" : 
                                        task.type === 'code' ? "url(#teamGrad)" : 
                                        "url(#projectGrad)"} 
                                  opacity="0.8">
                                <animate attributeName="y" values="-15;-18;-15" 
                                         dur="3s" begin={`${task.delay}s`} repeatCount="indefinite"/>
                            </rect>
                            
                            {/* Progress Indicator */}
                            <rect x="-15" y="8" width="30" height="3" rx="1.5" fill="white" opacity="0.7">
                                <animate attributeName="width" values="5;30;5" 
                                         dur="4s" begin={`${task.delay}s`} repeatCount="indefinite"/>
                            </rect>
                        </g>
                    ))}
                </g>

                {/* Real-time Collaboration Dots */}
                <g opacity={mounted ? 0.6 : 0}>
                    {Array.from({ length: 12 }).map((_, i) => {
                        const angle = (i * 30) * Math.PI / 180;
                        const radius = 160 + Math.random() * 30;
                        const delay = Math.random() * 2;
                        return (
                            <circle key={i} 
                                    cx={200 + Math.cos(angle) * radius} 
                                    cy={200 + Math.sin(angle) * radius} 
                                    r="2" 
                                    fill="#10B981">
                                <animate attributeName="r" values="1.5;3;1.5" 
                                         dur="2s" begin={`${delay}s`} repeatCount="indefinite"/>
                                <animate attributeName="opacity" values="0.4;0.8;0.4" 
                                         dur="2s" begin={`${delay}s`} repeatCount="indefinite"/>
                            </circle>
                        );
                    })}
                </g>

           

                {/* Status Indicators */}
                <g opacity={mounted ? 1 : 0}>
                    {/* Online Status Pulse */}
                    <circle cx="350" cy="50" r="6" fill="#10B981" opacity="0.9">
                        <animate attributeName="r" values="5;8;5" dur="2s" repeatCount="indefinite"/>
                    </circle>
                    <circle cx="350" cy="50" r="6" fill="#10B981" opacity="0">
                        <animate attributeName="r" values="6;15;25" dur="3s" repeatCount="indefinite"/>
                        <animate attributeName="opacity" values="0.3;0.1;0" dur="3s" repeatCount="indefinite"/>
                    </circle>
                </g>
            </svg>
        </div>
    );
};

const MobileAppSVG = ({ isActive }: { isActive: boolean }) => {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    return (
        <div className="relative w-full h-full">
            <svg viewBox="0 0 400 400" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <linearGradient id="appPrimary" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#EC4899" />
                        <stop offset="100%" stopColor="#BE185D" />
                    </linearGradient>
                    
                    <linearGradient id="appSecondary" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#8B5CF6" />
                        <stop offset="100%" stopColor="#7C3AED" />
                    </linearGradient>

                    <filter id="appGlow">
                        <feGaussianBlur stdDeviation="4" result="blur"/>
                        <feComposite in="SourceGraphic" in2="blur" operator="over"/>
                    </filter>
                </defs>

                {/* Central Phone */}
                <g transform="translate(200, 200)" opacity={mounted ? 1 : 0}>
                    <rect x="-20" y="-40" width="40" height="70" rx="8" fill="white" stroke="url(#appPrimary)" strokeWidth="2.5">
                        <animate attributeName="y" values="-40;-42;-40" dur="4s" repeatCount="indefinite" calcMode="spline" keySplines="0.4 0 0.2 1; 0.4 0 0.2 1"/>
                    </rect>
                    
                    {/* App Screen */}
                    <rect x="-15" y="-35" width="30" height="45" rx="4" fill="#F8FAFC" opacity="0.9"/>
                    
                    {/* Active App Header */}
                    <rect x="-15" y="-35" width="30" height="8" rx="2" fill="url(#appPrimary)" opacity="0.9">
                        <animate attributeName="opacity" values="0.8;1;0.8" dur="3s" repeatCount="indefinite"/>
                    </rect>
                    
                    {/* Loading Bar */}
                    <rect x="-8" y="15" width="16" height="2" rx="1" fill="url(#appPrimary)" opacity="0.7">
                        <animate attributeName="width" values="4;16;4" dur="2s" repeatCount="indefinite"/>
                    </rect>
                </g>

                {/* Floating App Icons */}
                <g opacity={mounted ? 0.9 : 0}>
                    {Array.from({ length: 6 }).map((_, i) => {
                        const angle = (i * 60) * Math.PI / 180;
                        const radius = 100;
                        return (
                            <rect key={i} 
                                  x={200 + Math.cos(angle) * radius - 4} 
                                  y={200 + Math.sin(angle) * radius - 4} 
                                  width="8" height="8" rx="2" 
                                  fill={i % 2 === 0 ? "url(#appPrimary)" : "url(#appSecondary)"} 
                                  opacity="0.8">
                                <animate attributeName="opacity" values="0.6;0.9;0.6" 
                                         dur="2s" begin={`${i * 0.2}s`} repeatCount="indefinite"/>
                                <animateTransform attributeName="transform" type="translate" 
                                                values="0,0;0,-3;0,0" 
                                                dur="3s" begin={`${i * 0.2}s`} repeatCount="indefinite"/>
                            </rect>
                        );
                    })}
                </g>

                {/* Minimal Data Streams */}
                <g opacity={mounted ? 0.5 : 0}>
                    {Array.from({ length: 3 }).map((_, i) => (
                        <circle key={i} 
                                cx={120 + i * 20} 
                                cy={300} 
                                r="2" 
                                fill="url(#appPrimary)">
                            <animate attributeName="cy" values="300;100;300" 
                                     dur="3s" begin={`${i * 0.5}s`} repeatCount="indefinite"
                                     calcMode="spline" keySplines="0.4 0 0.2 1; 0.4 0 0.2 1"/>
                        </circle>
                    ))}
                </g>

                {/* Subtle Background Pulse */}
                <g opacity={mounted ? 0.2 : 0}>
                    <circle cx="200" cy="200" r="120" fill="none" stroke="url(#appPrimary)" strokeWidth="1">
                        <animate attributeName="r" values="115;125;115" dur="6s" repeatCount="indefinite"/>
                    </circle>
                </g>
            </svg>
        </div>
    );
};

const WebsiteDevSVG = ({ isActive }: { isActive: boolean }) => {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    return (
        <div className="relative w-full h-full">
            <svg viewBox="0 0 400 400" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <linearGradient id="webGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#F97316" />
                        <stop offset="100%" stopColor="#EA580C" />
                    </linearGradient>
                </defs>

                {/* Browser Window */}
                <g transform="translate(200, 200)" opacity={mounted ? 1 : 0}>
                    {/* Browser Frame */}
                    <rect x="-80" y="-60" width="160" height="120" rx="8" fill="white" stroke="url(#webGrad)" strokeWidth="3" />

                    {/* Browser Tabs */}
                    <rect x="-75" y="-55" width="40" height="8" rx="4" fill="#E5E7EB" />
                    <rect x="-30" y="-55" width="30" height="8" rx="4" fill="#E5E7EB" />

                    {/* Content Area */}
                    <rect x="-75" y="-40" width="150" height="90" rx="4" fill="#F8FAFC" />

                    {/* Website Layout */}
                    <rect x="-70" y="-35" width="140" height="15" rx="2" fill="url(#webGrad)" opacity="0.7">
                        <animate attributeName="opacity" values="0.5;0.8;0.5" dur="2s" repeatCount="indefinite" />
                    </rect>
                    <rect x="-70" y="-15" width="60" height="50" rx="2" fill="#0EA5E9" opacity="0.3" />
                    <rect x="5" y="-15" width="65" height="25" rx="2" fill="#10B981" opacity="0.3" />
                    <rect x="5" y="15" width="65" height="20" rx="2" fill="#F59E0B" opacity="0.3" />
                </g>

                {/* Code Elements */}
                <g fontSize="10" fontFamily="'SF Mono', monospace" fill="#F97316" opacity={mounted ? 0.4 : 0}>
                    <text x="50" y="80">
                        &lt;html&gt;
                        <animate attributeName="opacity" values="0.2;0.6;0.2" dur="3s" repeatCount="indefinite" />
                    </text>
                    <text x="300" y="100">
                        .css
                        <animate attributeName="opacity" values="0.2;0.6;0.2" dur="3s" begin="1s" repeatCount="indefinite" />
                    </text>
                </g>
            </svg>
        </div>
    );
};

// Complete service data with all 6 services
const services = [
    {
        id: 'startup-digital',
        title: 'Startup Digital Foundation',
        subtitle: 'Launch faster, scale smarter',
        description: 'Complete tech setup for new founders. Enterprise-grade infrastructure from day one.',
        benefit: 'Start with battle-tested architecture that scales with your growth',
        gradient: 'from-purple-500 to-pink-500',
        bgGradient: 'from-purple-50 via-pink-50 to-fuchsia-50',
        svg: StartupDigitalSVG,
        color: '#8B5CF6'
    },
    {
        id: 'social-automation',
        title: 'Social Automation for Business',
        subtitle: 'WhatsApp + Instagram Integration',
        description: 'AI assistants that reply to customers, close sales & replace manual staff. Automate your customer engagement 24/7.',
        benefit: 'Reduce response time from hours to seconds while increasing conversions',
        gradient: 'from-green-500 to-emerald-500',
        bgGradient: 'from-green-50 via-emerald-50 to-teal-50',
        svg: SocialAutomationSVG,
        color: '#10B981'
    },
    {
        id: 'intelligence',
        title: 'Unlocking Intelligence',
        subtitle: 'AI-Powered Insights & Analytics',
        description: 'Harness the power of AI and data analytics to unlock insights, automate workflows, and make smarter business decisions.',
        benefit: 'Turn your data into your competitive advantage with actionable intelligence',
        gradient: 'from-blue-500 to-cyan-500',
        bgGradient: 'from-blue-50 via-cyan-50 to-indigo-50',
        svg: IntelligenceSVG,
        color: '#3B82F6'
    },
    {
        id: 'remote-team',
        title: 'Remote Staffing Solutions',
        subtitle: 'Scale Smart, Cut Costs',
        description: 'Slash operational costs by up to 60% with our elite remote teams. Get dedicated developers, designers, and specialists.',
        benefit: 'Access top talent without the overhead of full-time hires',
        gradient: 'from-amber-500 to-orange-500',
        bgGradient: 'from-amber-50 via-orange-50 to-yellow-50',
        svg: RemoteTeamSVG,
        color: '#F59E0B'
    },
    {
        id: 'mobile-app',
        title: 'Mobile App Development',
        subtitle: 'Native experiences for every platform',
        description: 'Create powerful mobile experiences that users love. From iOS to Android, we build apps that perform seamlessly across all devices.',
        benefit: 'Reach your customers wherever they are with flawless mobile experiences',
        gradient: 'from-pink-500 to-rose-500',
        bgGradient: 'from-pink-50 via-rose-50 to-red-50',
        svg: MobileAppSVG,
        color: '#EC4899'
    },
    {
        id: 'website-dev',
        title: 'Website Development',
        subtitle: 'Crafting digital experiences that drive growth',
        description: 'Build stunning, high-performance websites that convert visitors into customers. Responsive, fast, and optimized for results.',
        benefit: 'Create a powerful online presence that drives business growth',
        gradient: 'from-orange-500 to-red-500',
        bgGradient: 'from-orange-50 via-red-50 to-amber-50',
        svg: WebsiteDevSVG,
        color: '#F97316'
    }
];

export default function PremiumHero() {
    const { t } = useTranslation();
    const [activeService, setActiveService] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(false);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const interval = setInterval(() => {
            handleServiceChange((activeService + 1) % services.length);
        }, 5000);

        return () => clearInterval(interval);
    }, [activeService]);

    const handleServiceChange = (index: number) => {
        setIsTransitioning(true);
        setTimeout(() => {
            setActiveService(index);
            setIsTransitioning(false);
        }, 400);
    };

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!containerRef.current) return;

        const rect = containerRef.current.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width - 0.5) * 20;
        const y = ((e.clientY - rect.top) / rect.height - 0.5) * 20;

        setMousePosition({ x, y });
    };

    const currentService = services[activeService];
    const SVGComponent = currentService.svg;

    return (
        <div
            ref={containerRef}
            className="relative min-h-screen overflow-hidden bg-white"
            onMouseMove={handleMouseMove}
        >
            {/* Dynamic Gradient Background */}
            <div className={`absolute inset-0 transition-all duration-1000 ${currentService.bgGradient}`}>
                <div className="absolute inset-0 bg-gradient-to-br from-white via-white to-gray-50/80" />
            </div>

            {/* Animated Grid Overlay */}
            <div className="absolute inset-0 opacity-[0.02]">
                <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.1)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]" />
            </div>

            {/* Floating Particles */}
            <div className="absolute inset-0">
                {Array.from({ length: 15 }).map((_, i) => (
                    <div
                        key={i}
                        className="absolute w-[1px] h-[1px] bg-gray-400 rounded-full"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            animation: `float ${3 + Math.random() * 4}s infinite ease-in-out ${i * 0.2}s`,
                            opacity: Math.random() * 0.2 + 0.1,
                        }}
                    />
                ))}
            </div>

            <div className="relative z-10 container mx-auto px-6">
                <div className="min-h-screen flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20 pt-4 pb-20">

                    {/* Content Section */}
                    <div className="flex-1 max-w-2xl space-y-8 lg:space-y-12 mt-4">
                        {/* Service Indicator */}
                        <div className="flex items-center gap-4">
                            <div className="flex gap-1">
                                {services.map((_, index) => (
                                    <button
                                        key={index}
                                        onClick={() => handleServiceChange(index)}
                                        className={`w-2 h-2 rounded-full transition-all duration-500 ${index === activeService
                                            ? 'bg-gray-900 scale-125'
                                            : 'bg-gray-400 hover:bg-gray-600'
                                            }`}
                                    />
                                ))}
                            </div>
                            <div className="h-px bg-gradient-to-r from-gray-300 to-transparent flex-1" />
                            <span className="text-sm font-medium text-gray-600 uppercase tracking-widest">
                                {t(`hero.showcase${activeService + 1}`)}
                            </span>
                        </div>

                        {/* Main Content */}
                        <div className="space-y-6">
                            {/* Title Group */}
                            <div className="space-y-4">
                                <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 leading-tight tracking-tight">
                                    {t('hero.title').split(' ').map((word, i) => (
                                        <div
                                            key={i}
                                            className={`inline-block mr-4 transition-all duration-700 ${isTransitioning ? 'translate-y-4 opacity-0' : 'translate-y-0 opacity-100'
                                                }`}
                                            style={{ transitionDelay: `${i * 100}ms` }}
                                        >
                                            {word}
                                        </div>
                                    ))}
                                </h1>

                                <div className={`text-xl lg:text-2xl font-light text-gray-700 transition-all duration-700 ${isTransitioning ? 'translate-y-4 opacity-0' : 'translate-y-0 opacity-100'
                                    }`} style={{ transitionDelay: '300ms' }}>
                                    {t('hero.subtitle')}
                                </div>
                            </div>

                            {/* Description */}
                            <p className={`text-lg lg:text-xl text-gray-600 leading-relaxed max-w-2xl transition-all duration-700 ${isTransitioning ? 'translate-y-4 opacity-0' : 'translate-y-0 opacity-100'
                                }`} style={{ transitionDelay: '500ms' }}>
                                {currentService.description}
                            </p>

                            {/* Key Benefit */}
                            <div className={`bg-gray-50/80 backdrop-blur-md border border-gray-200 rounded-2xl p-6 transition-all duration-700 ${isTransitioning ? 'translate-y-4 opacity-0' : 'translate-y-0 opacity-100'
                                }`} style={{ transitionDelay: '700ms' }}>
                                <p className="text-gray-800 font-medium">
                                    {currentService.benefit}
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Visual Section */}
                    <div className="flex-1 flex items-center justify-center">
                        <div
                            className="relative w-80 h-80 lg:w-[500px] lg:h-[500px] transition-transform duration-200"
                            style={{
                                transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`
                            }}
                        >
                            {/* Main SVG Container */}
                            <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br from-white to-gray-50 backdrop-blur-2xl border border-gray-200 shadow-2xl transition-all duration-1000 ${isTransitioning ? 'opacity-0 scale-95' : 'opacity-100 scale-100'
                                }`}>
                                <div className="absolute inset-6 rounded-2xl bg-white/50 backdrop-blur-md border border-gray-100">
                                    <SVGComponent isActive={!isTransitioning} />
                                </div>
                            </div>

                            {/* Ambient Glow */}
                            <div
                                className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${currentService.gradient} opacity-10 blur-3xl transition-all duration-1000 ${isTransitioning ? 'opacity-0 scale-95' : 'opacity-10 scale-100'
                                    }`}
                            />

                            {/* Floating Orbs */}
                            <div className="absolute -top-4 -right-4 w-8 h-8 rounded-full bg-gradient-to-br from-gray-400 to-gray-300 opacity-20 animate-pulse" />
                            <div className="absolute -bottom-4 -left-4 w-6 h-6 rounded-full bg-gradient-to-br from-gray-400 to-gray-300 opacity-20 animate-pulse delay-1000" />
                        </div>
                    </div>
                </div>

                {/* Fixed CTA Button - Clean Black Design */}
                <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-20">
                    <a 
                        href="https://wa.me/971552094128?text=Hi%20CometByte!%20I'm%20interested%20in%20starting%20a%20project%20with%20you.%20Let's%20discuss%20my%20requirements."
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <button
                            className="group relative px-8 py-3 bg-black text-white text-sm font-medium rounded-full hover:bg-gray-900 transition-all duration-300 shadow-lg hover:shadow-xl border border-black/10 backdrop-blur-sm overflow-hidden"
                        >
                            <span className="relative z-10 flex items-center gap-2">
                                {t('hero.cta')}
                                <svg
                                    className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </span>
                            {/* Subtle shine effect */}
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                        </button>
                    </a>
                </div>
            </div>

            <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(180deg); }
        }
      `}</style>
        </div>
    );
}