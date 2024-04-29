namespace ClassLibrary
{
    public class PodRide
    {
        public string Model { get; init; }

        public string Color { get; init; }

        public int MaxSpeed { get; init; }

        public PodRide()
        {
            Model = "Model";
            Color = "Green";
            MaxSpeed = 150;
        }
    }
}
