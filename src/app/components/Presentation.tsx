import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { TitleSlide } from "./slides/TitleSlide";
import { AboutSlide } from "./slides/AboutSlide";
import { CredentialsSlide } from "./slides/CredentialsSlide";
import { ProblemStatementSlide } from "./slides/ProblemStatementSlide";
import { ExecutiveSummarySlide } from "./slides/ExecutiveSummarySlide";
import { Module1Slide } from "./slides/Module1Slide";
import { Module2Slide } from "./slides/Module2Slide";
import { Module3Slide } from "./slides/Module3Slide";
import { Module4Slide } from "./slides/Module4Slide";
import { TechnicalFlowSlide } from "./slides/TechnicalFlowSlide";
import { FutureRoadmapSlide } from "./slides/FutureRoadmapSlide";
import { ConclusionSlide } from "./slides/ConclusionSlide";

const slides = [
  TitleSlide,
  AboutSlide,
  CredentialsSlide,
  ProblemStatementSlide,
  ExecutiveSummarySlide,
  Module1Slide,
  Module2Slide, // PO & Invoice Management
  Module3Slide, // Budget & CAPEX Management
  Module4Slide,
  TechnicalFlowSlide,
  FutureRoadmapSlide,
  ConclusionSlide,
];

export function Presentation() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" && currentSlide < slides.length - 1) {
        setCurrentSlide(currentSlide + 1);
      } else if (e.key === "ArrowLeft" && currentSlide > 0) {
        setCurrentSlide(currentSlide - 1);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentSlide]);

  const CurrentSlideComponent = slides[currentSlide];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100">
      <div className="container mx-auto px-8 py-8 h-screen flex flex-col">
        {/* Slide Content */}
        <div className="flex-1 flex items-center justify-center">
          <CurrentSlideComponent />
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-between py-4">
          <button
            onClick={() => setCurrentSlide(Math.max(0, currentSlide - 1))}
            disabled={currentSlide === 0}
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white shadow-sm hover:shadow-md disabled:opacity-30 disabled:cursor-not-allowed transition-all"
          >
            <ChevronLeft className="w-5 h-5 text-blue-600" />
            <span className="text-sm">Previous</span>
          </button>

          <div className="flex gap-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentSlide
                    ? "bg-blue-600 w-8"
                    : "bg-blue-200 hover:bg-blue-300"
                }`}
              />
            ))}
          </div>

          <button
            onClick={() =>
              setCurrentSlide(Math.min(slides.length - 1, currentSlide + 1))
            }
            disabled={currentSlide === slides.length - 1}
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white shadow-sm hover:shadow-md disabled:opacity-30 disabled:cursor-not-allowed transition-all"
          >
            <span className="text-sm">Next</span>
            <ChevronRight className="w-5 h-5 text-blue-600" />
          </button>
        </div>

        {/* Slide Counter */}
        <div className="text-center text-sm text-slate-500 mt-2">
          Slide {currentSlide + 1} of {slides.length}
        </div>
      </div>
    </div>
  );
}