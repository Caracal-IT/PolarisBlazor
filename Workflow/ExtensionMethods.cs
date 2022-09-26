using Microsoft.JSInterop;

namespace PolarisBlazor.Workflow; 

public static class ExtensionMethods {
  public static Workflow Workflow(this IJSRuntime runtime) =>
    new (runtime);
  
  public static ModelService Model(this IJSRuntime runtime) =>
    new (runtime);
}