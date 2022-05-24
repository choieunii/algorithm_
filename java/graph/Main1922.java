package graph;

import java.io.*;
import java.lang.*;
import java.util.*;

public class Main1922 {

    static ArrayList<Edge> list = new ArrayList<>();
    static int[] parent;
    static int[] dist;

    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

        int N = Integer.parseInt(br.readLine());
        int M = Integer.parseInt(br.readLine());

        for (int i = 0; i < M; i++) {
            StringTokenizer st = new StringTokenizer(br.readLine());

            int a = Integer.parseInt(st.nextToken());
            int b = Integer.parseInt(st.nextToken());
            int c = Integer.parseInt(st.nextToken());
            list.add(new Edge(a, b, c));
        }

        parent = new int[N + 1];

        for (int i = 1; i <= N; i++)
            parent[i] = i;

        Collections.sort(list, (a, b) -> a.weight - b.weight);

        int ans = 0;

        for (int i = 0; i < list.size(); i++) {
            Edge edge = list.get(i);

            if (find(edge.start) == find(edge.end))
                continue;

            ans += edge.weight;
            union(edge.start, edge.end);
        }
        System.out.println(ans);
    }

    static int find(int a) {
        if (parent[a] == a)
            return a;
        return parent[a] = find(parent[a]);
    }

    static void union(int a, int b) {
        int pa = find(a);
        int pb = find(b);

        if (pa == pb)
            return;

        parent[pa] = pb;
    }

    static class Edge {
        int start;
        int end;
        int weight;

        Edge(int start, int end, int weight) {
            this.start = start;
            this.end = end;
            this.weight = weight;
        }
    }
}
